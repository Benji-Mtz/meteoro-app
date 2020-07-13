import React from 'react';

export const Footer = () => {


    return (
        <footer className="page-footer font-small mt-5">

  {/* Footer Links */}
  <div className="container text-center text-md-left">

    {/* <!-- Grid row --> */}
    <div className="row">

      {/* <!-- Grid column --> */}
      <div className="col-md-3 mx-auto">

        {/* <!-- Links --> */}
        <h5 className="font-weight-bold mt-3 mb-4">Nuestros Productos</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!">Tracker GPS</a>
          </li>
          <li>
            <a href="#!">Tracker GPS para niños</a>
          </li>
          <li>
            <a href="#!">Tracker GPS para perros y gatos</a>
          </li>
          <li>
            <a href="#!">Tracker GPS para Bicicletas</a>
          </li>
          <li>
            <a href="#!">Tracker GPS para Profesionales</a>
          </li>
        </ul>

      </div>
      {/* <!-- Grid column --> */}

      <hr className="clearfix w-100 d-md-none" />

      {/* <!-- Grid column --> */}
      <div className="col-md-3 mx-auto">

        {/* <!-- Links --> */}
        <h5 className="font-weight-bold mt-3 mb-4">Asociados de Negocios</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!">Suntech</a>
          </li>
          <li>
            <a href="#!">Mto. Abel Hernandez</a>
          </li>
          <li>
            <a href="#!">Cisco</a>
          </li>
          <li>
            <a href="#!">IoT Industries</a>
          </li>
        </ul>

      </div>
      {/* <!-- Grid column --> */}

      <hr className="clearfix w-100 d-md-none" />

      {/* <!-- Grid column --> */}
      <div className="col-md-3 mx-auto">

        {/* <!-- Links --> */}
        <h5 className="font-weight-bold mt-3 mb-4">Meteoro</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!">Acerca de Nosotros</a>
          </li>
          <li>
            <a href="#!">Blog</a>
          </li>
          <li>
            <a href="#!">Bolsa de Trabajo</a>
          </li>
        </ul>

      </div>
      {/* <!-- Grid column --> */}

      <hr className="clearfix w-100 d-md-none" />

      {/* <!-- Grid column --> */}
      <div className="col-md-3 mx-auto">

        {/* <!-- Links --> */}
        <h5 className="font-weight-bold mt-3 mb-4">Siguenos</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!"><i className="fab fa-twitter"></i>{' '}Twitter</a>
          </li>
          <li>
            <a href="#!"><i className="fab fa-facebook">{' '}Facebook</i></a>
          </li>
          <li>
            <a href="#!"><i className="fab fa-linkedin"></i>{' '}LinkedIn</a>
          </li>
          <li>
            <a href="#!"><i className="fab fa-youtube"></i>{' '}Youtube</a>
          </li>
        </ul>

      </div>
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Grid row --> */}

  </div>
  {/* <!-- Footer Links --> */}

  
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://meteoro.app/"> meteoro.app</a>
  </div>
  

</footer>
    )
}
