
import ItemDetail from "./ItemDetail"
import { useEffect , useState } from "react";
import customFetch from "../utilities/customFetch";


import products from "../utilities/products";


const ItemDetailContainer = () =>{

    const [datos, setdatos] = useState([]);


      useEffect(() => {
        customFetch(1000, products[5])
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