import ItemCount from "./ItemCount";

const ItemListContainer = (props) =>{
    return(
    <>

    <div>

      <h1 className="titulo1">{props.greeting}</h1>
      <ItemCount stock = "5" initial = "1"/>

    </div>

    </>
    );
}

export default ItemListContainer;