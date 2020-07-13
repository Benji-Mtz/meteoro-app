import React from 'react'

export const Contacto = () => {
    return (
    <div className="container">
        <div className="row justify-content-center formulario" >
        <div className="col-md-8 col-lg-6">
            <form>
            <div className="card-body">
                <h1 className="card-title text-center text-primary">Contacto</h1>
                <div className="form-group">
                    <label htmlFor="exampleInputName">Nombre Completo</label>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Nombre completo" required />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Correo electrónico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email@correo.com" required />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPhone">Número Telefónico</label>
                    <input type="tel" id="exampleInputPhone" name="phone" className="form-control" placeholder="Teléfono" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Solución de Interés:</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                    <option>Flotillas</option>
                    <option>Motos</option>
                    <option>Bicicletas</option>
                    <option>Mascotas</option>
                    <option>Activos y Mercancías</option>
                    </select>
                </div>
                <button name="submit" type="submit" className="btn btn-outline-primary btn-block">Enviar</button>
            </div>
            </form>
        </div>
        </div>
    </div>
    )
}
