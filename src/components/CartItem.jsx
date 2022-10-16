
import { useContext } from "react";
import { CartContext } from "./CartContext";
const CartItem = ({id, tittle, price, pictureUrl, cantidad}) =>{
    const {removeItemId, totalPerItem} = useContext(CartContext);
    const totalPerProduct = totalPerItem(id);
    return(
        <>

          <div className="card mb-3" style={{maxWidth: '50rem'}}>
           <div className="row g-0">
             <div className="col-md-4">
               <img src={pictureUrl} className="img-fluid rounded-start" alt="..." />
             </div>
             <div className="col-md-8">
               <div className="card-body">
                 <h5 className="card-title">{tittle}</h5>
                 <p className="card-text">Precio del producto $ {price}</p>
                 <p className="card-text"><small className="text-muted">Cantidad: {cantidad}</small></p>
                 <h6>${totalPerProduct}</h6>
                 <button onClick={()=>removeItemId(id)} type="button" class="btn btn-primary">Eliminar</button>
               </div>
             </div>
           </div>
         </div>
        </>
    );
}

export default CartItem;