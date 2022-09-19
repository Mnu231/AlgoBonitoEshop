
import ItemDetail from "./ItemDetail"
import { useEffect , useState } from "react";
import customFetch from "../utilities/customFetch";
import { useParams } from "react-router-dom";

import products from "../utilities/products";


const ItemDetailContainer = () =>{
  const {id} = useParams()
    const [datos, setdatos] = useState([]);


      useEffect(() => {
        customFetch(1000, products.find(item => item.id === parseInt(id)))
            .then(result => setdatos(result))
            .catch(err => console.log(err))

      }, []);

    return(
    
    <div>
        <ItemDetail items={datos}/>
    </div>
    );
}

export default ItemDetailContainer;