import React, { useEffect, useState } from "react";
import arrayProductos from "./JSON/productos.json"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {id} = useParams();
    
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos);
            }, 2000)
        });
        promesa.then(resolve => {
            setItems(resolve);
        });
    }, [id]);
    


    return (
        <div>
            <div className="container text-center">
                <h1>Nuestros productos</h1>
                <div className="row my-5">
                    <div className="row text-center justify-content-center">
                        <ItemList item={items}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer
