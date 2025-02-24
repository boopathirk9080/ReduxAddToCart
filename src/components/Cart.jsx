import { useDispatch, useSelector, } from "react-redux"
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Grid,
    Container,
    
} from "@mui/material";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { removeItem, incrementQuantity, decrementQuantity } from "../store/Slice";
import { removeAll } from "../store/Slice";
import { useEffect, useState } from "react";
// const dateFromWeb = JSON.parse(localStorage.getItem('cart'))

function Cart() {
    const cartProducts = useSelector((state) => { return state.cart })
    // console.log(cartProducts);
    const dispatch = useDispatch((state => { return state.cart }))
    //remove a products
    function handleDelete(productIdforReduxDeleteOperation) {
        dispatch(removeItem(productIdforReduxDeleteOperation))
    }
    //handleDecrement
    function handleIncrement(productId) {
        dispatch(incrementQuantity(productId))

    }
    function handleDecrement(productId) {
        dispatch(decrementQuantity(productId))
    }
    const handleClearCart = () => {
        dispatch(removeAll());
    };
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        const total = cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalPrice(total);
       
    }, [cartProducts]);

    const handleCheckout = () => {
        const message = encodeURIComponent(
            `Hello, I would like to place an order for the following items:\n\n${cartProducts
                .map((item) => `${item.title} - Quantity: ${item.quantity}`)
                .join("\n")}\n\nTotal Price: ₹${totalPrice.toFixed(2)}`
        );
        window.open(`https://wa.me/919080787009?text=${message}`, "_blank");
    };
    return (
        <div>
            {cartProducts.length !== 0 ? (<Container sx={{ mt: 5 }}>
                <h2>Cart</h2>
                <Typography variant="h5" sx={{ mt: 3 }}>
                    Total: ₹{totalPrice.toFixed(2)}
                </Typography>
                <Button
                    variant="contained"
                    onClick={handleCheckout}
                    sx={{
                        mt: 2,
                        mr: 2,
                        backgroundColor: '#128c7e',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#0f6f63',
                        },
                    }}
                >
                    Checkout via WhatsApp
                </Button>

                <Button
                    variant="outlined"

                    onClick={handleClearCart}
                    sx={{
                        mt: 2,
                        mr: 2,
                        backgroundColor: '#c52828',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#8d3030',
                        },
                    }}
                >
                    Clear Cart
                </Button>

                <Grid container spacing={3}>
                    {cartProducts.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <br />
                            <Card sx={{ boxShadow: 3, width: "100%", padding: "5px" }}>
                                <center>
                                    <CardMedia component="img" height="250" style={{ height: "142px", width: "44%" }} image={product.image} alt={product.title} />
                                </center>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>{product.title}</Typography>
                                    <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                                        ₹{product.price}
                                    </Typography>
                                    <div>
                                        <Button
                                            onClick={() => handleDecrement(product.id)}
                                            disabled={product.quantity === 1}
                                        >
                                            <b>-</b>
                                        </Button>
                                        <Button onClick={() => handleIncrement(product.id)}>
                                            <b>+</b>
                                        </Button>
                                        <Button onClick={() => handleDelete(product.id)}
                                            style={{ width: "50px", }} ><Link >
                                                < RiDeleteBin4Fill
                                                    style={{ color: "red", width: "20px" }} /></Link>
                                        </Button>
                                        <b>Quantity:{product.quantity}</b>

                                    </div>
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
