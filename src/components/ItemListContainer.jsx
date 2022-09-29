import Itemlist from "./ItemList"
import { useEffect , useState } from "react";

import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../utilities/fireBaseConfig"
import { useParams } from "react-router-dom";

const ItemListContainer = (props) =>{
    const [datos, setdatos] = useState([]);
    const {id} = useParams()

      useEffect(() => {
        const firestoreFetch = async ()=>{
          let q
          if(id){
             q = query(collection(db, "productos"), where('categoryId', '==', parseInt(id) ))
          } else{
             q = query(collection(db, "productos"))
            }   
            
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot)
            const dataFromFirestore =  querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
                }));
                return dataFromFirestore
          }

        firestoreFetch()
            .then(result => setdatos(result))
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