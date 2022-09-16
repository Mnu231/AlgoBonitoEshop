import ItemCount from "./ItemCount"

const ItemDetail = ({ items }) =>{
    return(
        
        items.pictureUrl
        ? 
        <div className="detail">
        <div>
        <img  src={items.pictureUrl} className="imgDetalle" alt="..." />
        </div>
        <div id="detailMenu">
                
                <div className="precioNombre">
                    <h2 id="detailTittle"> {items.tittle} </h2>

                    <h4>$ {items.price}</h4>
                </div>
                
                
                <div className="descripcion">
                    <h6> Descripción del producto: </h6>
                    <p>{items.description}</p>
                </div>
                
                
                
                <div class="selector-talle">
                    <h6>Talle:</h6>
                    
                    <button type="button" className="btn btn-outline-primary"> xs </button>
                    <button type="button" className="btn btn-outline-primary"> s </button>
                    <button type="button" className="btn btn-outline-primary"> m </button>
                    <button type="button" className="btn btn-outline-primary"> l </button>
                    <button type="button" className="btn btn-outline-primary"> xl </button>
                    <button type="button" className="btn btn-outline-primary"> xxl </button>
    
                </div>
                
                
                <div className="boton-comprar">
                    <ItemCount />
                </div>

            </div>

        </div>
        : <p>cargando..</p>
    );
}

export default ItemDetail;