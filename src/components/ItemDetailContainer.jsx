
import ItemDetail from "./ItemDetail"
import { useEffect , useState } from "react";
import customFetch from "../utilities/customFetch";
import { useParams } from "react-router-dom";
import { doc, getDoc, query} from "firebase/firestore";
import { db } from "../utilities/fireBaseConfig";


const ItemDetailContainer = () =>{
   const [datos, setDatos] = useState([]);
    const {id} = useParams()


      useEffect(() => {
        const docFetch = async () => {
            const docRef = query(doc(db, "productos", id));
            const docSnap = await getDoc(docRef);
            
             const docFromfirebase = {
              id: docSnap.id,
              ... docSnap.data()
             }
             return(docFromfirebase)
             
        }

        docFetch()
        .then(result => setDatos(result))

      }, []);
 
    return( 
    
    <div>
        <ItemDetail items={datos}/>
    </div>
    ); 
}


export default ItemDetailContainer;