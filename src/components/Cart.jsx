import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
const Cart = () =>{
    const {cartList , clear} = useContext(CartContext);
            
    return(
        <>
        <h2>I'm Cart</h2>
        
        <div>
        {cartList.map(cartList => <CartItem key={cartList.id} id={cartList.id} tittle = {cartList.tittle} price = {cartList.price} pictureUrl = {cartList.pictureUrl}  cantidad={cartList.quantity}/>)}

        </div>
        <button onClick={clear} type="button" class="btn btn-primary">Borrar</button>
        </>
    );
}

export default Cart;