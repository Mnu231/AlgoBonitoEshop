import { Link } from "react-router-dom";
const Item = ({id, tittle, price, pictureUrl }) =>{
    return(
        <div id= {id} className="card" style={{width: '18rem'}}>
        <img src={pictureUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{tittle}</h5>
          <p className="card-text">$ {price}</p>
        <Link to={"/item/"+id}> <button className="btn btn-primary">Detalle</button> </Link>  
        </div>
      </div>
    );
}
export default Item;