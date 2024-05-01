import Item from "./Item"

const ItemList = ({item}) => {
    return(
        <>
            {item.map(produ => (
                <Item key={produ.id} item={produ}/>
            ))}
        </>
    )
}

export default ItemList