import { Children, createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const  [carrito, setCarrito] = useState([]);

    const addItem = (item, quantity) => {
        if(isInCart(item.id)) {
            let product = carrito.find(prod => prod.id === item.id);
            product.quantity += quantity;
            setCarrito([...carrito, ]);
        }else{
            setCarrito([...carrito, {...item, quantity:quantity}]);
        }
    }

    const removeItem = (id) => {
        const items = carrito.filter(item => item.id !== id);
        setCarrito([...items]);
    }

    const clear = () => {
        setCarrito([])
    }

    const isInCart = (id) => {
        return carrito.some(item => item.id === id);
    }

    const getCountProducts = () => {
        return carrito.reduce((acum, item) => acum += item.quantity, 0);
    }

    const getSumProducts = () => {
        return carrito.reduce((acum, item) => acum += item.quantity * item.precio, 0); 
    }

    return(
        <CartContext.Provider value={{carrito, addItem, removeItem, clear, getCountProducts, getSumProducts}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;