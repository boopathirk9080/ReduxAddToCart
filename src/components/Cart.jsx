import { useDispatch, useSelector } from "react-redux"
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Grid,
    Container
} from "@mui/material";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { removeItem } from "../store/Slice";
function Cart() {
    const cartProdects = useSelector((state) => { return state.cart })
    console.log(cartProdects);
    const dispatch = useDispatch((state => { return state.cart }))

    function handleDelete(productIdforReduxDeleteOperation) {
        dispatch(removeItem(productIdforReduxDeleteOperation))
    }
    return (
        <div>

            {cartProdects.length !== 0 ? (<Container sx={{ mt: 5 }}>
                <h2>Cart</h2>
                <Grid container spacing={3}>
                    {cartProdects.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Card sx={{ boxShadow: 3, width: "100%", padding:"5px" }}>
                                <CardMedia component="img" height="250" image={product.image} alt={product.title} />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>{product.title}</Typography>
                                    <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                                        ${product.price}
                                    </Typography>

                                    <Button style={{ width: "50px", }} onClick={() => handleDelete(product.id)} ><Link >< RiDeleteBin4Fill style={{ color: "red", width: "20px" }} /></Link></Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>




            ) : <center> <h2>Please Purchase Something</h2>
                <Link to='/products' > <Button><LuShoppingCart />
                </Button></Link> </center>
            }
        </div>
    )
}

export default Cart
