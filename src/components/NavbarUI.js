import React from 'react';
import logo from '../assets/meteoro.svg';
import { NavLink, Link } from 'react-router-dom';



export const NavbarUI = () => {
    return (
        
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
            <img src={ logo } width="150" height="30" className="d-inline-block align-top" alt="logo" loading="lazy" />
            </Link>{ }
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                <li className="nav-item">
                    <NavLink exact activeClassName="active" className="nav-link" to="/trackergps">Tracker-GPS</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Bike-Tracker
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/motocicletas">Motocicletas</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/bicicletas">Bicicletas</Link>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Servicios
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/activos">Activos/Mercancias</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/pet">Pet</Link>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Industria-IoT
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/domotica">Domótica</Link>
                    </div>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName="active" className="nav-link" to="/ojos-en-el-camino">Ojos en el camino</NavLink>
                </li>
                </ul>
                <ul className="navbar-nav ml-auto">

                <li className="nav-item">
                    <NavLink exact activeClassName="active" className="nav-link" to="/contacto">Contacto</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
                </li>
                </ul>
            </div>
        </nav>
    )
}