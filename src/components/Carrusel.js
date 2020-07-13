import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


export const Carrusel = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="item">
          <img
            className="d-block w-100"
            src="https://static.meteoro.app/Flotillas/gestion-vehicular-camiones-autos-activos-tracker-gps-rastreador.jpg"
            alt="Primer slide" 
          />
          <Carousel.Caption>
                <h4>Meteoro Tracker GPS</h4>
                <p>Nueva generación de tracker GPS.</p>
                <Button href="/trackergps" variant="primary">Saber más...</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block w-100"
            src="https://static.meteoro.app/Motocicletas/tracker-motocicletas-reparto-delibery-entregas.jpg"
            alt="Segundo slide" 
          />
  
          <Carousel.Caption>
            <h4>Meteoro Tracker GPS</h4>
            <p>Proteja su vehículo.</p>
            <Button href="/motocicleta" variant="primary">Saber más...</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block w-100"
            src="https://static.meteoro.app/Bicicletas/Bicicletas-seguro-tracker-ruta-candado-anti-robo.jpg"
            alt="Tercer slide" 
          />
  
          <Carousel.Caption>
            <h4>Meteoro Tracker GPS</h4>
            <p>Rastrea y localiza tu bicicleta en tiempo real.</p>
            <Button href="/bicicleta" variant="primary">Saber más...</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block w-100"
            src="https://static.meteoro.app/Contenedores/Contenedores-mercancias-activos-seguimiento-tracker-localizacion-gps-satelital-0g-barcos-camiones-almacenes.jpg"
            alt="Cuarto slide" 
          />
          <Carousel.Caption>
            <h4>Meteoro Tracker GPS</h4>
            <p>Rastrea, protege tus activos con localizacion en tiempo real.</p>
            <Button href="/activos" variant="primary">Saber más...</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block w-100"
            src="https://static.meteoro.app/Mascotas/proteccion-Mascotas-gatos-perros-localizacion-sin-perdida-ubicacion-gps-gatas-tracker-perro.jpg"
            alt="Quinto slide" 
          />
  
          <Carousel.Caption>
            <h4>Meteoro Tracker GPS</h4>
            <p>Rastreo de mascotas con geo-cercas virtuales y notificaciones via correo o sms.</p>
            <Button href="/pet" variant="primary">Saber más...</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
    );
  }