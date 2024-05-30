import { Link } from "react-router-dom"
import cart from "../assets/cart.svg"
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

function CartWidget () {
    const {getCountProducts} = useContext(CartContext);

    if (getCountProducts() > 0){
        return(
            <Link to={"/cart"} className="btn position-relative">
                <img src={cart} alt="Carrito" width={16} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill 
                bg-warning text-black">{getCountProducts()}</span>
            </Link>
        )
    }
}

export default CartWidget

