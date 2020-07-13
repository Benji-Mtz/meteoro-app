import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {Container, Col, Row, Jumbotron, Image} from 'react-bootstrap';
import { Footer } from '../Footer';

export const TrackerGps = () => {
    return (
        <div>
            <Container className="mt-3">
                <Row>
                    <Col xs={12} md={8}>
                    <Jumbotron>
                        <h1 className="text-primary">Meteoro Fleet Sistema de Tracking</h1>
                        <p className="text-justify">
                        <Image className="jumbo-image p-2" src="https://static.meteoro.app/Flotillas/tracker-gps-autos-camionetas-ban-reparto.jpeg" rounded align="left" />
                        <b>Meteoro</b> es nuestra <b>Plataforma</b> LBS y Localizador GPS, diseñada con el fin de convertirse en la solución ideal para rastrear tus posesiones más valiosas en todo México. Gracias a su interfaz intuitiva y creada con la mejor tecnología de equipos IoT (Internet of Things) cualquier persona puede utilizar esta vital herramienta de forma sencilla.

                        Meteoro Plataforma LBS es el servicio que tiene como objetivo ayudarte con el rastreo de tus unidades eficazmente, por ello puedes usarlo de diferentes formas. Hemos ideado tecnologías para que tanto empresas como personas puedan conseguir en nuestras soluciones de rastreo y localización, la herramienta perfecta que se requiere en rastreo, localización y ubicación.
                        </p>

                        <h1 className="text-primary" >Principales usos de la Plataforma Meteoro LBS</h1>
                        <p className="text-justify">
                        <Image align="right" className="jumbo-image p-2" src="https://static.meteoro.app/Flotillas/flotillas-reparto-localizacion-camiones-camionetas.jpeg" rounded />
                        Uno de sus principales usos es el <b>sistema de rastreo para flotillas</b> que les permite a los empresarios saber dónde se encuentran las unidades con su valiosa inversión y sus productos en todo momento. Desde cualquier lugar, gracias a nuestro sistema inteligente, podrás <b>administrar tus activos</b> al brindarte la ubicación exacta de la totalidad de tu flotilla por medio de nuestra aplicación web, conjuntamente con equipo IoT de GPS y la <b>app de gestión remota de Meteoro</b>.

                        Meteoro LBS tiene el servicio de Localizador GPS ideal para centrales de taxis, rutas y empresas de <b>transporte urbano</b>, con el fin de localizar todas las unidades de transporte en tiempo real. Esto va a lograr una mejora considerable en el sistema de gestión entre clientes y choferes, lo que se traducirá en mayores ganancias. De igual manera funciona para restaurantes, farmacias o cualquier empresa que ofrezca servicios a domicilio, pues les permitirá rastrear sus unidades y llegar fácilmente a la dirección del cliente.
                        Nuestro servicio de Rastreo, Ubicación y Localización GPS es más que una herramienta para empresas, ya que contamos con distintas versiones de servicios y opciones de uso personal. Contamos con versiones para <b>proteger tus vehículos</b> y otras más para saber dónde se encuentran tus hijos o tus seres queridos de edad avanzada. ¡El sistema con el que está creado Meteoro te brindará tranquilidad!

                        Con su tecnología y sus utilidades es perfecto como sistema de rastreo y localización para tu <b>motocicleta o bicicleta</b>. Además, si cuentas con un sistema de <b>entregas</b>, Meteoro LBS te brindará seguridad, protección y la posibilidad de ubicar o monitorear tus productos de un modo óptimo y eficiente.

                        Y, ¿qué hay de <b>nuestras mascotas</b>? El Rastreador, Localizador GPS Meteoro LBS también nos permite cuidar, rastrear y ubicar a ese integrante especial de nuestra familia, a través de servicios como Geo-cercas virtuales, alertas a correo electrónico o mensajes de texto 24/7. ¡No tendrás de qué preocuparte!
                        </p>

                        <h1 className="text-primary" >¿Por qué elegir el servicio de Meteoro LBS, Localizador GPS? </h1>
                        <p className="text-justify">¿Por qué elegir el servicio de Meteoro LBS, Localizador GPS?

                        Nuestro sistema de localización es confiable y exacto pues es compatible con las más avanzadas <b>tecnologías en equipos IoT (Internet of Things)</b>. Por tanto, cuenta con sensores integrados, softwares y otras tecnologías con la finalidad de realizar la conexión e intercambio de datos con varios dispositivos y sistemas por medio de Internet.

                        Como asociados de negocios contamos con proveedores en equipo IoT “Internet of Things” y con fabricantes de <b>tecnología GPS para Localización, rastreo, ubicación</b> y <a href="https://es.wikipedia.org/wiki/Telemetr%C3%ADa"> telemetría</a>. Contamos con equipos de tecnología compatibles con redes anti “Jammer” 0G de SIGFOX, que son el proveedor de servicios líder en el mundo para IoT (Internet of Things). Contar con equipos de la más alta calidad convierte a Meteoro LBS en el <b>mejor servicio de rastreo y localización</b> de la región.

                        Si tienes alguna pregunta acerca de nuestros servicios y soluciones no dudes en contactarte con nosotros, con gusto responderemos todas tus inquietudes. Después de todo, ¡la seguridad de tu empresa y la de tu familia es nuestra prioridad!
                        Portafolio de Soluciones
                        </p>
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
