import React from 'react'

export const Signup = () => {
    return (
    <div className="container">
        <div className="row justify-content-center formulario" >
        <div className="col-md-8 col-lg-6">
            <form>
            <div className="card-body">
                <h1 className="card-title text-center text-primary">Registro</h1>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Correo electrónico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico" required />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName">Nombre Completo</label>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputUser">Nombre de Usuario</label>
                    <input type="text" className="form-control" id="exampleInputUser" aria-describedby="emailHelp" />
                </div>
                <button name="submit" type="submit" className="btn btn-outline-primary btn-block">Registro</button>
            </div>
            </form>
            <small className="form-text text-muted">Ir a: <a href="/login">Login</a></small>
        </div>
        </div>
    </div>
    )
}
