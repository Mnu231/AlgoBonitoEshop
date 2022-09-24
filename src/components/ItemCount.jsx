import  {useState} from "react"


const ItemCount = ({stock , initial , onAdd}) =>{
    

    const [cantidad, setCantidad] = useState(initial);

    const addInitial = () =>{
        if(cantidad < stock){
            setCantidad (cantidad + 1)
        }
    }

     const substractInitial = () =>{
        if(cantidad > initial){
            setCantidad (cantidad - 1)
        }
    }
    

    
    return(
        <>
        <div className="counter-container">
            <div className="number-container">
                <button onClick={substractInitial} type="button" class="btn btn-secondary">-</button>{cantidad}
                <button onClick={addInitial} type="button" class="btn btn-secondary">+</button>
            </div>
            <div className="send-container">
                <button onClick={()=>onAdd(cantidad)} className="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
        </>
    )
}

export default ItemCount;