
import ItemDetail from "./ItemDetail"
import { useEffect , useState } from "react";
import customFetch from "../utilities/customFetch";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () =>{
   const [datos, setdatos] = useState([]);
    const {id} = useParams()


      useEffect(() => {
        
      /*   customFetch(1000, products.find(item => item.id === parseInt(id)))
            .then(result => setdatos(result))
            .catch(err => console.log(err)) */

      }, []);
 
    return( 
    
    <div>
        <ItemDetail items={datos}/>
    </div>
    ); 
}


export default ItemDetailContainer;