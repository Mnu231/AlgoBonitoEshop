import Itemlist from "./ItemList"
import { useEffect , useState } from "react";
import customFetch from "../utilities/customFetch";
import products from "../utilities/products";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) =>{
    const [datos, setdatos] = useState([]);
    const {id} = useParams()

      useEffect(() => {
        if (id) {
          customFetch(2000, products.filter(item => item.categoryId === parseInt(id)))
              .then(result => setdatos(result))
              .catch(err => console.log(err))
        } else {
          customFetch(2000, products)
              .then(result => setdatos(result))
              .catch(err => console.log(err))
        }
      }, [id]);
     
  
    
    return(
    
    <div>

      <h1 className="titulo1">{props.greeting}</h1>
    <div id="productos">
      <Itemlist items={datos}/>
    </div>  
      

    </div>
    );
}

export default ItemListContainer;