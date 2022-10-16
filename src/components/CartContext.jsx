import { createContext, useState }  from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState ([])

    const addItem = (product ,cantidad) =>{
        const isIncart = cartList.find((cartList => cartList.id === product.id))
        if (isIncart === undefined) {
            product.quantity = cantidad
            setCartList([
            ...cartList,
            product, 
            ])
        }else{
            product.quantity += cantidad
        }
        
               
    }
    
    const totalProducts = () => cartList.reduce((acc, product) => acc + product.quantity, 0);

    const totalPrice = () => {
        return cartList.reduce((acc, act) => acc + act.quantity * act.price, 0);
    }
    const totalPerItem =(id) =>{
        let index = cartList.map(product => product.id).indexOf(id)
        return cartList[index].price * cartList[index].quantity
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
        <CartContext.Provider value={{cartList, addItem , clear, removeItemId, totalProducts, totalPrice, totalPerItem}}>
        {children}
        </CartContext.Provider>
        </>
    );
}

export default CartContextProvider;