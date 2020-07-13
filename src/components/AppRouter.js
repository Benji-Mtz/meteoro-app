// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";


import { Home } from './paginas/Home';
import { Ojos } from './paginas/Ojos';
import { NavbarUI } from './NavbarUI';
import { TrackerGps } from './paginas/TrackerGps';
import { Motocicletas } from './paginas/Motocicletas';
import { Bicicletas } from './paginas/Bicicletas';
import { Activos } from './paginas/Activos';
import { Pet } from './paginas/Pet';
import { Domotica } from './paginas/Domotica';
import { Contacto } from './paginas/Contacto';
import { Login } from './paginas/Login';
import { Signup } from './paginas/Signup';

export const AppRouter = () => {
    return (
        
        <Router>
            <div>
                
                <NavbarUI />               

                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route exact path="/trackergps" component={ TrackerGps } />
                    <Route exact path="/motocicletas" component={ Motocicletas }/>
                    <Route exact path="/bicicletas" component={ Bicicletas }/>
                    <Route exact path="/activos" component={ Activos }/>
                    <Route exact path="/pet" component={ Pet }/>
                    <Route exact path="/domotica" component={ Domotica }/>
                    <Route exact path="/ojos-en-el-camino" component={ Ojos }/>
                    <Route exact path="/contacto" component={ Contacto }/>
                    <Route exact path="/login" component={ Login }/>
                    <Route exact path="/signup" component={ Signup }/>
                    <Redirect to="/" />
                </Switch>
            </div>
    </Router>
    )
}