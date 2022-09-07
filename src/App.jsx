
import React from 'react';
import './App.css'

const App = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Algo Bonito
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pantalones</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Remeras</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Polleras</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nosotros</a>
              </li>
             
             
            </ul>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="text" placeholder="Buscar" />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default App;
