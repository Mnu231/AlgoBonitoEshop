import Item from "./Item"

const ItemList = ({ items }) =>{
    return(
        items.length > 0
        ? items.map(item => <Item key={item.id} id={item.id} tittle = {item.tittle} price = {item.price} pictureUrl = {item.pictureUrl}/>)
        : <p>cargando..</p>
    );
}

export default ItemList;