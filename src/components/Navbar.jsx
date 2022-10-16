import CartWidget from "./CartWidget";
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
                 <button type="button" class="btn btn-primary">Algo Bonito</button>
                 </Link> 
                </li>
                <li className="nav-item">
                
                 <Link to="/category/1"> <button type="button" class="btn btn-primary">Pantalones</button> </Link> 
                </li>
                <li className="nav-item">
                
                 <Link to ="/category/2"> <button type="button" class="btn btn-primary">Remeras</button> </Link> 
                </li>
                <li className="nav-item">
                  <Link to ="/category/3"> <button type="button" class="btn btn-primary">Vestidos</button> </Link>
                </li>
                <li className="nav-item">
                <button type="button" class="btn btn-primary">Nosotros</button>
                </li>
               
              </ul>
              <form className="d-flex " >
                <input className="form-control me-sm-2" type="text" placeholder="Buscar" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
              </form>
              <Link  to = "/cart"><CartWidget /></Link>
            </div>
          </div>
        </nav>
  
      </>
    );
  }

  export default Navbar;
  