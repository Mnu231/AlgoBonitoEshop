import Cartwidget from "./Cartwidget";
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                 <Link to="/"> 
                 <a className="nav-link active" href="#">Algo Bonito
                    <span className="visually-hidden">(current)</span>
                  </a>
                 </Link> 
                </li>
                <li className="nav-item">
                 <Link to="/category/1"> <a className="nav-link">Pantalones</a> </Link> 
                </li>
                <li className="nav-item">
                 <Link to ="/category/2"> <a className="nav-link" >Remeras</a> </Link> 
                </li>
                <li className="nav-item">
                  <Link to ="/category/3"> <a className="nav-link" >Vestidos</a> </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" >Nosotros</a>
                </li>
               
              </ul>
              <form className="d-flex " >
                <input className="form-control me-sm-2" type="text" placeholder="Buscar" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
              </form>
              <Link  to = "/cart"><Cartwidget /></Link>
            </div>
          </div>
        </nav>
  
      </>
    );
  }

  export default Navbar;
  