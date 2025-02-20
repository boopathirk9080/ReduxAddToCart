import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to MyShop</h1>
      <p>Your one-stop shop for amazing products.</p>
       <Link to='/products' ><button className="shop-button">Shop Now</button></Link> 
    </div>
  );
}

export default Home;
