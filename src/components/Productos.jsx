import { useEffect, useState } from "react";
import Loading from "./Loading";

const RenderProductos = () => {
    const productos = [
        {
            id: 2,
            nombre: "Porción de Banana Split Cheescake",
            descripcion: "Cheesecake de dulce de leche y banana con corazón de dulce de leche y choco on top!",
            precio: 6200,
            imagen: "https://www.pani.com.ar/cdn/shop/files/Recortes_Web_Arma_tu_Box_2024_28_590x.jpg?v=1710522078",
            categoria: "porcion",
            stock: 10
            },
            {
            id: 3,
            nombre: "Porcion de Choco Fan Cheesecake",
            descripcion: "Cheesecake de super chocolate con baño de choco semi amargo y avellanas tostadas",
            precio: 6500,
            imagen: "https://www.pani.com.ar/cdn/shop/files/Recortes_Web_Arma_tu_Box_2024_30_590x.jpg?v=1710522103",
            categoria: "porcion",
            stock: 10
            },
            {
            id: 4,
            nombre: "Muffin con chip de chocolate",
            descripcion: "Muffin de vainilla con chips de cholocate semi amargo",
            precio: 4100,
            imagen: "https://www.pani.com.ar/cdn/shop/files/Recortes_Web_Arma_tu_Box_2024_6_590x.jpg?v=1710522192",
            categoria: "porcion",
            stock: 10
            }
    ];
    return(
        <div className="container my-5">
            <div className="row">
                {productos.map(item => (
                    <div key={item.id} className="col-md-3">
                        <div className="card border-0">
                            <img src={item.imagen} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center"><b>{item.nombre}</b><br />${item.precio}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
    
}

const Productos = () => {
    
    const [espera, setEspera] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setEspera(false)
        }, 2000)
    })

    return (
        <>
            {espera ? <Loading /> : <RenderProductos />}
        </>
    )
}

export default Productos;