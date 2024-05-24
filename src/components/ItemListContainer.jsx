import React, { useEffect, useState } from "react";
import arrayProductos from "./JSON/productos.json"
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

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
            <div className="container text-center">
                <div className="row my-5">
                        <ItemList items={items} />
                </div>
            </div>
    );
};

export default ItemListContainer
