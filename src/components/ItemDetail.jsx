import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.image} className="img-fluid" alt={item.name} />
                </div>
                <div className="col-md-4">
                    <h1>{item.name}</h1>
                    <p><b>Precio: ${item.price}</b></p>
                    <p>{item.description}</p>
                    <ItemCount stock={item.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;