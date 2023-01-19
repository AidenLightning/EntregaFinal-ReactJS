import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'

const Navbar = () => {

  return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand">⚡Lightning Store⚡</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={'nav-link active'} aria-current="page" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={'nav-link'} to='/categoria/amplificadores'>Amplificadores</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={'nav-link'} to='categoria/guitarras'>Guitarras</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={'nav-link'} to='categoria/efectos'>Efectos</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={'nav-link'} to='categoria/sintetizadores'>Sintetizadores</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={'nav-link'} to='categoria/interfaces'>Interfaces</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="navbar-item">
            <a className="nav-link">Finalizar Compra:</a>
        </li>
        <li className="navbar-item">
            <CartWidget/>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar