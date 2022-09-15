
const Item = ({id, tittle, price, pictureUrl }) =>{
    return(
        <div id= {id} className="card" style={{width: '18rem'}}>
        <img src={pictureUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{tittle}</h5>
          <p className="card-text">$ {price}</p>
          <a href="#" className="btn btn-primary">Agregar al carrito</a>
        </div>
      </div>
    );
}
export default Item;