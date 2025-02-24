import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { Button } from "@mui/material";

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">MyShop</h2>
            <ul className="nav-links">
              
                <Button><Link to="/">Home</Link></Button>
                <Button><Link to="/products">Store</Link></Button>
                <Button> <Link to='/cart' ><MdOutlineShoppingCartCheckout  /></Link></Button>
            </ul>
        </nav>
    );
}

export default Navbar;
