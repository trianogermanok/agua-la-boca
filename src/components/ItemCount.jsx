import { useEffect, useState } from "react"

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const onAdd = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador);
            setContador(1);
            console.log("Agregaste " + contador + " Productos al Carrito!");
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock])

    return(
        <div className="container row d-flex justify-content-center align-items-center">
            <div className="row justify-content-center align-items-center">
                <div className="col-auto">
                    <button type="button" className="btn bg-primary text-white" onClick={decrementar}> - </button>
                </div>
                <div className="col-auto">
                    <button type="button" className="btn bg-primary text-white rounded-0">{contador}</button>
                </div>
                <div className="col-auto">
                    <button type="button" className="btn bg-primary text-white" onClick={incrementar}> + </button>
                </div>
            </div>
            <div className="row my-1 justify-content-center align-items-center">
                <button type="button" className="btn bg-success text-white text-uppercase" onClick={onAdd}>Agregar Al Carrito</button>
            </div>
        </div>
    )
}
export default ItemCount