import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({item}) => {
    return (
        <div className="col-md-4 text-center">
            <Link to={"/item/" + item.id} className="text-decoration-none">
                <div className="card border-0">
                    <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                    <div className="card-body">
                        <p className="card-text small text-uppercase">{item.nombre}<br /><span className="card-text fs-5"><b>Precio: ${item.precio}</b></span></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;