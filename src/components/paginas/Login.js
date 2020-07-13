import React from 'react';

export const Login = () => {
    return (
    <div className="container">
        <div className="row justify-content-center formulario" >
        <div className="col-md-8 col-lg-6">
            <form>
            <div className="card-body">
                <h1 className="card-title text-center text-primary">Ingreso</h1>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Correo electrónico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico" required />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" required />
                </div>
                <button name="submit" type="submit" className="btn btn-outline-primary btn-block">Ingresar</button>
            </div>
            </form>
            <small className="form-text text-muted">Si aun no tiene cuenta, registrese en: <a href="/signup">Registro</a> </small>
        </div>
        </div>
    </div>
    )
}
