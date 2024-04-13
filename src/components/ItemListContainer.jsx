const ItemListContainer = ({mensaje}) => {
    return(
        <div style={{width:'100vw', height:'auto',}} className="col text-center">
            <h1>Bienvenidos a Agua la boca</h1>
            <h3>Recetas caseras, dulces y con amor</h3>
            <p>{mensaje}</p>
        </div>
    )
}

export default ItemListContainer