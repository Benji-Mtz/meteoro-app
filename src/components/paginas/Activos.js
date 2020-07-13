import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {Container, Col, Row, Jumbotron, Image} from 'react-bootstrap';
import { Footer } from '../Footer';

export const Activos = () => {
    return (
        <div>
        <Container className="mt-3">
            <Row>
                <Col xs={12} md={8}>
                <Jumbotron>
                    <h1 className="text-primary">Localización y Rastreo de Activos</h1>
                    <p className="text-justify">
                    <Image align="right" className="jumbo-image p-2" src="https://static.meteoro.app/Contenedores/Contenedores-maniobras-perdida-gps-activos-viajes-gruas-operadores-manejo-gestion-ionventarios.jpeg" rounded />
                    Meteoro plataforma LBS y localizador GPS brinda el mejor servicio con la más innovadora tecnología del mercado, con el fin de permitir que las empresas obtengan información fidedigna sobre el estado y la ubicación de sus activos en tiempo real.
                    <br /><br />
                    <h5 className="text-primary"> Beneficios</h5>
                    <br />                        
                    <li>Permite localizar, rastrear y proteger sus activos, desde pequeños paquetes hasta grandes contenedores. Podrá valerse de nuestra plataforma web junto con las mejores herramientas de alto rendimiento como equipos IoT de GPS y la aplicación de gestión remota, para que desde cualquier lugar sepa todo sobre su mercancía.</li>
                    <li>Nuestro sistema de rastreo es exacto y confiable. El principal objetivo es brindarle tranquilidad, seguridad y precisión al proporcionarle información exacta acerca de sus posesiones más valiosas, ofreciéndole un servicio de óptima calidad que le permita rastrear eficazmente sus bienes desde cualquier lugar dentro y fuera del país.</li>
                    <li>Evita la pérdida de tus activos. Para esto le ofrecemos coordenadas exactas de la ubicación de sus bienes mediante la recepción de alertas, que le permitirán conocer la ruta exacta de sus activos, anticiparse ante cualquier posible riesgo y actuar con rapidez si llegase a presentarse un imprevisto.</li>
                    <li>Localización en tiempo real. Mediante mapas digitales y fotografías satelitales podrá ubicar geográficamente sus activos para así tener un control eficaz en tiempo real.</li>
                    <br /><br />
                    <h5 className="text-primary">Funcionamiento</h5>
                    <br />
                    <li>Los dispositivos de localización y rastreo GPS se comunican con satélites de manera oportuna, lo cual le permitirá obtener una ubicación geográfica exacta, fidedigna y veraz y así podrá ver la ruta que sigan sus activos.</li>
                    <li>El sistema de localización y rastreo de sus activos Meteoro Plataforma LBS y localizador GPS, le proporciona más que una simple visión superficial de sus bienes. Le ofrece la oportunidad de conocer a profundidad la ubicación exacta de su valiosa inversión en todo momento con un amplio conjunto de herramientas: equipos con tecnología IoT mapas digitales, fotos satelitales e información telemétrica en tiempo real.</li>
                    <li>Sencillez en el montaje o instalación</li>
                    <li>Vigilancia en tiempo real e inmediato</li>
                    <li>Reportes seguidos automáticos de las rutas hechas por el dispositivo.</li>
                        <br /><br />
                    <h5 className="text-primary">Rastreo Preciso de Activos GPS en Alta Definición</h5>
                    <br />
                    Le permite obtener los datos que necesita sobre sus activos de forma inmediata gracias a la tecnología 5G y el seguimiento en tiempo real, proporcionando coordenadas y direcciones confiables, llegando a los lugares más remotos de manera segura y con el resguardo de sus valiosos bienes.
                    <br />
                    Con nuestros servicios de excelente tecnología vanguardista e innovadora podrá:
                    <br />
                    <li>Rastrear y vigilar diversos objetos a una escala mayor y detallada a través de los mapas digitales.</li>
                    <li>Visualizar el tráfico a 360° mediante la construcción de rutas por sitios menos transitados es decir que tendrá acceso a un panorama amplio para poder escoger la ruta más idónea y segura en resguardo de sus activos.</li>
                    <li>Seguimiento en tiempo real gracias a los mejores métodos de geolocalizacióny datos actualizados al instante.</li>
                    <li>El tiempo siempre ha sido de gran valor y cuando están envueltos nuestros preciados bienes más aún, es por esto que nuestra plataforma le permite ampliar la visión en tiempo real, y verificar diversos aspectos sobre la transportación de sus bienes.</li>
                    <br /><br />
                    <h5 className="text-primary">Rastreo Preciso de Activos GPS en Alta Definición</h5>
                    <br />
                    Con las Geo-cercas protegerá su carga de robos y movimientos no autorizados, si sus activos se alejan de la zona permitida recibirá una notificación.
                    <br />
                    Podrá recibir y personalizar alertas automáticas mediante notificaciones en situaciones como las siguientes:
                    <br />
                    <li>Apertura de puerta sin la debida autorización, así como el cierre sin previo aviso.</li>
                    <li>Boton SOS.</li>
                    <li>Variación de Temperatura.</li>
                    <li>Distorsión de la ruta.</li>
                    <li>Rastreo de caídas.</li>
                    <li>Intromisión.</li>
                    <li>Exploración de arrastre.</li>
                    <br />
                    No se quede sin probar la última innovación en rastreo y localización GPS, no permita los incumplimientos en su empresa, detéctelos a tiempo y más importante aún, mantenga protegidos y seguros sus activos pues de eso depende su productividad.
                    <br />
                    Recuerde que lo primordial para Meteoro plataforma LBS y localizador GPS es la seguridad y resguardo de sus bienes y de su familia. Para más información sobre nuestros servicios, no dude en escribirnos. 
                    
                    <Image className="w-100 p-2 mx-auto d-block" src="https://static.meteoro.app/Contenedores/traslado-mercancias-activos-ropa-electrodomestico-aceite-comestibles-despensas-cajas-Contenedores.jpeg" rounded />
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
