import Cart from "./Cart";
import { useContext } from "react";
import { CartContext } from "./CartContext";
const CartItem = ({id, tittle, price, pictureUrl, cantidad}) =>{
    const {removeItemId, totalPerItem} = useContext(CartContext);
    const totalPerProduct = totalPerItem(id);
    return(
        <>
        <div id= {id} className="card" style={{width: '10rem'}}>
        <img src={pictureUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{tittle}</h5>
          <p className="card-text">Precio del producto $ {price}</p>  
          <h6>Cantidad {cantidad}</h6>
          <h6>${totalPerProduct}</h6>
          <button onClick={()=>removeItemId(id)} type="button" class="btn btn-primary">Eliminar</button>
        </div>
      </div>
        </>
    );
}

export default CartItem;