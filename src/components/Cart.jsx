import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () =>{
    const {cartList , clear, itemCount} = useContext(CartContext);
        cartList.map(item => <li>{item.tittle}</li>)
        cartList.map(item => <h6>{item.quantity}</h6>)
    
    return(
        <>
        <h2>I'm Cart</h2>
        
        <div>
        
        </div>
        
        
        
        <button onClick={clear} type="button" class="btn btn-primary">Borrar</button>
        </>
    );
}

export default Cart;