import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [visible, setVisible] = useState(true);
    const {id} = useParams();
    
    // Accedo a un producto por ID en FireStore
    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "items", id);
        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setVisible(false);
            }
        });
    }, [id])

    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    {visible ? <Loading /> : <ItemDetail item={item}/> }
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer
