import { createContext, useState }  from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState ([])
    const addItem = (product ,cantidad) =>{
        product.quantity = cantidad
        setCartList([
            ...cartList,
            product, 
            
            
        ])
        
    }
    const clear = () =>{
        setCartList([])
    }
    return(
        <>
        <CartContext.Provider value={{cartList, addItem , clear}}>
        {children}
        </CartContext.Provider>
        </>
    );
}

export default CartContextProvider;