import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
const Cart = () =>{
    const {cartList , clear , totalProducts, totalPrice} = useContext(CartContext);        
    let total = totalProducts();
    let finalPrice = totalPrice();
    return(
       
        <>
        
        <div>
        <div className="card border-secondary mb-3" style={{maxWidth: '20rem'}}>
        <div className="card-header">Total de productos: {total}</div>
        <div className="card-body">
          <h4 className="card-title">Total de la compra:</h4>
          <p className="card-text">$ {finalPrice}</p>
        </div>
        <button type="button" class="btn btn-primary">Finalizar Compra</button>
        </div>
        </div>
        {
            total == 0 
            ?   <div><Link to="/"> <h5>Carrito Vacio </h5> <button type="button" className="btn btn-primary">HOME</button></Link></div>
            : <div></div>
        }
        

        <div>
        {cartList.map(cartList => <CartItem key={cartList.id} id={cartList.id} tittle = {cartList.tittle} price = {cartList.price} pictureUrl = {cartList.pictureUrl}  cantidad={cartList.quantity}/>)}
    
        {
            total > 0 
            ?  <button onClick={clear} type="button" class="btn btn-primary">Borrar</button>
            : <div></div>
        }
        </div>
        </>
    );
}

export default Cart;