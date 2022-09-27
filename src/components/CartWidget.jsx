import { useContext } from "react";
import { CartContext } from "./CartContext";


const CartWidget = () =>{
    const {totalProducts} = useContext(CartContext);
    let total = totalProducts();
    return (
        <>
            {
             total > 0
            ?   
            <div className="imgCart">
              <img src="https://img.icons8.com/pastel-glyph/64/1A1A1A/shopping-cart--v1.png"/>
              <span class="badge rounded-pill bg-danger">{total}</span>
            </div>
            :<div></div>

            }
        </>
    );
}

export default CartWidget;