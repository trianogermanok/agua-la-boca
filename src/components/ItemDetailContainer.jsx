import React, { useEffect, useState } from "react";
import arrayProductos from "./JSON/productos.json"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams();
    
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                const producto = arrayProductos.find(item => item.id == id);
                resolve(producto);
            }, 2000)
        });
        promesa.then(resolve => {
            setItem(resolve);
        });
    }, [id]);
    


    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <ItemDetail item={item}/>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer
