import { useEffect, useState } from "react";
import Producto from "./Producto";

const ListaDeProductos = ({ productos }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setTimeout(() => {
                setData(productos);
            }, 2000);
        };
        fetchData();
    }, []);

    return (
    <div>
        <h1>Listado de Productos</h1>
        {data ? (
            <div>
                {data.map(producto => (
                    <Producto
                        key={producto.id}
                        name={producto.name}
                        description={producto.description}
                        price={producto.price}
                        image={producto.image}
                    />
                ))}
            </div>
            ) : (<p>Cargando...</p>)
        }
    </div>
    );
};

export default ListaDeProductos