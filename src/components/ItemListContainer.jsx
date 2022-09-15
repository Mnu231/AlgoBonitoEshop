import ItemCount from "./ItemCount";
import Itemlist from "./ItemList"
import { useEffect , useState } from "react";
import customFetch from "../utilities/customFetch";


import products from "../utilities/products";


const ItemListContainer = (props) =>{

    const [datos, setdatos] = useState([]);


      useEffect(() => {
        customFetch(1000, products)
            .then(result => setdatos(result))
            .catch(err => console.log(err))

      }, []);
      console.log(datos)
  
  
    
    return(
    
    <div>

      <h1 className="titulo1">{props.greeting}</h1>
    <div id="productos">
      <Itemlist items={datos}/>
    </div>  
      <ItemCount stock = "5" initial = "1"/>

    </div>
    );
}

export default ItemListContainer;