import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Container,
  CircularProgress
} from "@mui/material";

import { useDispatch } from "react-redux";
import { addItem } from '../store/Slice'


const API_URL = "http://localhost:5000/products";

function ProductPage() {


  const dispatch = useDispatch((state => { return state.cart }))


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);
  //add to cart iteration to get product data


  function addItemToCart(product) {
    dispatch(addItem(product))
  }
  if (loading) {
    return (
      <Container sx={{ textAlign: "center", mt: 5 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ boxShadow: 3, height: "100%" }}>
              <center>
                <CardMedia component="img" style={{ height: '172px', width: '56%', padding: '10px' }} image={product.image} alt={product.title} />
              </center>
              <CardContent>
                <Typography variant="h6" gutterBottom>{product.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description.substring(0, 80)}...
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                  ₹{product.price}
                </Typography>
                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={() => { addItemToCart(product); }} >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductPage;
