import { createContext, useState }  from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState ([])

    const addItem = (product ,cantidad) =>{
        const isIncart = cartList.find((cartList => cartList.id === product.id))
        
        if (isIncart == undefined) {
            product.quantity = cantidad
            setCartList([
            ...cartList,
            product, 
            ])
        }else{
            product.quantity += cantidad
        }
        
               
    }
    const removeItemId = (id)=>{
       setCartList([
        ...cartList.filter((product) => product.id !==id )
    ])
       
        
    }
    const clear = () =>{
        setCartList([])
    }
    return(
        <>
        <CartContext.Provider value={{cartList, addItem , clear, removeItemId}}>
        {children}
        </CartContext.Provider>
        </>
    );
}

export default CartContextProvider;