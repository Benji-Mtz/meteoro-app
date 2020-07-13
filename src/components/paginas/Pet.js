import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {Container, Col, Row, Jumbotron, Image} from 'react-bootstrap';
import { Footer } from '../Footer';


export const Pet = () => {
    return (
        <div>
        <Container className="mt-3">
            <Row>
                <Col xs={12} md={8}>
                <Jumbotron>
                    <h1 className="text-primary">Localización y Rastreo de Mascotas</h1>
                    <p className="text-justify">
                    <Image align="right" className="jumbo-image p-2" src="https://static.meteoro.app/Mascotas/perdido-perro-beagel-correa-gps-pila-autonomia.jpeg" rounded />
                    Sólo en la Ciudad de México se extravían unas 200 mascotas a la semana, teniendo en cuenta esto, Meteoro Plataforma LBS y Localizador GPS ha creado sus servicios con el fin de rastrear y localizar tus posesiones más valiosas, entre las que se destacan tus fieles Mascotas quienes también forman parte de tu familia; creada con la mejor tecnología en equipos IOT se destaca por ser una herramienta confiable, eficaz y puntual.
                    <br />
                    <br /><br />
                    <h5 className="text-primary">Cómo funciona el GPS Localización y Rastreo de tu Mascota</h5>
                    <br />
                    Nuestra plataforma Meteoro LBS te ofrece un servicio para que puedas rastrear, proteger y localizar tus mascotas en todo momento. Este sistema cuenta con Geo-cercas virtuales, mensajes de texto 24/7 y alertas a tu email en caso de que tu mascota salga del perímetro establecido.
                    <br />
                    El GPS para tus perros o gatos es un dispositivo de búsqueda pequeño pero muy eficaz pues acompañará los viajes de tu mascota a donde quiera que vaya, podrás rastrearlo en tiempo real mediante un mapa que se visualizará en tu smartphone. El dispositivo se ubica en el collar de tu mascota el cual dará las coordenadas exactas de tu mascota en caso de que se escapara de tu hogar o se extraviara.
                    <br /><br />
                    <h5 className="text-primary">Zona con Garantía - Evita que tú Mascota se escape</h5>
                    <br />
                    Nuestro servicio de Geo-cercas actúa como un perímetro virtual que indica si el GPS de tu mascota está dentro o fuera de la zona asignada, mediante una notificación inmediata a tu teléfono te informa lo sucedido para que actúes con rapidez ante un posible peligro o riesgo para tu Mascota. El GPS del collar procede cómo rastreador y plan antifuga.
                    <br /><br />
                    <h5 className="text-primary">Tus Mascotas Unidas En Una Sola Aplicación</h5>
                    <br />
                    Desde una misma cuenta puedes Geolocalizar todas tus mascotas usando un solo dispositivo GPS el cual te facilitará el Rastreo en el mapa. Gracias a esta tecnología vanguardista no es necesario fijar varios GPS porque este respalda la seguridad de diferentes mascotas al mismo tiempo.
                    <br /><br />
                    <h5 className="text-primary">Rastreo y Localización en el Parque</h5>
                    <br />
                    Aún en un lugar donde parezca casi imposible encontrar a tu mascota extraviada nuestro sistema GPS con la mejor tecnología puede monitorear los movimientos del animal haciendo que el rastreo funcione eficazmente pues puede cubrir un amplio territorio. El localizador funciona aún donde exista menor cobertura de telefonía móvil.
                    <br /><br />
                    <h5 className="text-primary">Distintos Rastreos, Resultados Eficaces</h5>
                    <br />
                    El dispositivo GPS ubicado en el collar de la mascota cuenta con un complejo sistema de rastreo inalámbrico que transmite las coordenadas exactas mediante mapas satelitales. Lo cual siempre permitirá conocer la ubicación de tu mascota. Sin lugar a duda, podrás disfrutar con toda seguridad y tranquilidad del paseo en el parque teniendo la certeza de que ubicaras a tu mascota con facilidad.
                    <br />
                    Con el localizador GPS y nuestra Plataforma LBS Meteoro, podrás saber en todo momento donde se encuentran tu perro o tu gato. Gracias a nuestra confiable tecnología tendrás la certeza y seguridad de que tu mascota siempre estará protegida.
                    <br />
                    Contar con nuestros servicios te brindará una tranquilidad sin igual pues no tendrás que preocuparte porque por la integridad de ese ser especial. Si quieres saber más del Localizados GPS y la Plataforma LBS Meteoro para mascotas, sólo tienes que dejarnos un mensaje.
                    </p>

                    <Image className="w-100 p-2 mx-auto d-block" src="https://static.meteoro.app/Mascotas/traker-campo-correa-pet-cuidado-perdido.jpeg" rounded />

                    </Jumbotron>
                </Col>
                <Col xs={12} md={4}>
                    <QueueAnim interval={500} delay={500} duration={1000} >
                        <h3>Portafolio de Soluciones</h3>
                        <div key="1"><a href="/trackergps"><Image src="https://static.meteoro.app/Motocicletas/tracker-motocicletas-reparto-delibery-entregas.jpg" thumbnail /></a></div>
                        <div key="2"><a href="/activos"><Image src="https://static.meteoro.app/Contenedores/Contenedores-mercancias-activos-seguimiento-tracker-localizacion-gps-satelital-0g-barcos-camiones-almacenes.jpg" thumbnail /></a></div>
                        <div key="3"><a href="/pet"><Image src="https://static.meteoro.app/Mascotas/proteccion-Mascotas-gatos-perros-localizacion-sin-perdida-ubicacion-gps-gatas-tracker-perro.jpg" thumbnail /></a></div>
                        <div key="4"><a href="/bicicletas"><Image src="https://static.meteoro.app/Bicicletas/Bicicletas-seguro-tracker-ruta-candado-anti-robo.jpg" thumbnail /></a></div>
                    </QueueAnim>
                </Col>
            </Row>
        </Container>

        <Footer />
        
    </div>
    )
}
