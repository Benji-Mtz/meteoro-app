import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {Container, Col, Row, Jumbotron, Image} from 'react-bootstrap';
import { Footer } from '../Footer';

export const Motocicletas = () => {
    return (
        <div>
        <Container className="mt-3">
            <Row>
                <Col xs={12} md={8}>
                <Jumbotron>
                    <h1 className="text-primary">Motocicletas</h1>
                    <p className="text-justify">
                    <Image align="right" className="jumbo-image p-2" src="https://static.meteoro.app/Motocicletas/dobleproposito-Motocicletas-campo-enduro-rodadas-moto-seguridad-anti-robo.jpeg" rounded />
                    La protección de nuestros clientes es nuestra prioridad, al brindarles una plataforma de tracking y localización GPS completamente funcional, sabemos que podrás tener el control de tus motocicletas con la seguridad y confianza que sólo <b>Meteoro LBS con Localizador GPS</b> te puede proporcionar.

                    strong Por tal motivo, nuestra <b>Plataforma Meteoro LBS</b> cuenta con un eficaz <b>servicio de rastreo y Localizador GPS para motocicletas</b>. Gracias a que utilizamos la mejor tecnología de equipos IoT (Internet of Things) que proporcionan una interfaz intuitiva, podrás utilizar fácilmente nuestras herramientas de localización y rastreo para tus unidades.

                    Con Meteoro nuestra Plataforma LBS y Localizador GPS podrás conseguir importantes funciones para proteger tu motocicleta como las siguientes: 
                    <ul>
                        <li><b>Ubicación en tiempo real</b>: Podrás conocer la ubicación de tus motocicletas con sólo entrar a nuestra Plataforma LBS. Tendrás visibilidad de tus unidades en mapas digitalizados / mapas satelitales. En cualquier lugar y en todo momento, desde tu PC o teléfono inteligente.</li>
                        <li><b>Módulo Geo-cercas</b>: Nuestra Plataforma LBS cuenta con un módulo donde podrás crear una geo-cercas digital para áreas determinadas y puntos de interés para mantener el control de tus unidades. Así podrás recibir alertas de salidas y entradas a zonas preestablecidas, así como usos fuera del horario establecido. </li>
                        <li><b>Protección contra robos</b>: Contamos con un servicio de paro de motor que corta el flujo de gasolina en la motocicleta para evitar el robo de tus unidades.</li>
                        <li><b>Acceso ininterrumpido</b>: Nuestra plataforma te brinda acceso a la localización geográfica de tus motocicletas o flotillas las 24 horas del día, todos los días del año. Además, gracias al diseño de su interfaz, cualquier persona puede aprender a utilizarla fácilmente.</li>
                        <li><b>Monitoreo especializado</b>: Contarás con un monitoreo y seguimiento especializado de rutas para que sepas en todo momento qué sucede con tus unidades.</li>
                        <li><b>Alertas vía SMS o Correo electrónico en tiempo real</b>: Nuestra Plataforma LBS Meteoro y Localizador GPS incorpora un sistema de alertas configuradas, en caso de alguna eventualidad recibirás lo más pronto posible un mensaje en tu teléfono para ser notificado. Si alguna de tus unidades sale de la geocerca, serás informado inmediatamente por estas vías.</li>
                        <li><b>App de gestión remota de Meteoro</b>: Gracias a nuestra Aplicación Móvil podrás administrar tus activos en todo momento, con el fin de potenciar el desempeño de tu fuerza de trabajo.</li>
                        <li><b>Sistema de Reportes y Estadísticas</b>: Recibirás reportes programados de uso, de acuerdo con las necesidades que tengan tus unidades. Nuestra plataforma y servicio de Localizador te permite monitorear el uso del combustible y verificar la calidad con la que fueron conducidas tus unidades con el fin de ofrecerte un mayor control en ellas.</li>
                        <li><b>Ideoneos para servicios de entregas</b>: Si tus unidades están asignadas para servicios de entregas como son: restaurantes, farmacias, refaccionarias y otros negocios, nuestro Localizador GPS es perfecto para una rápida gestión de rutas, dando las más optimas, mejorando el tiempo de entrega para tus clientes.</li>
                    </ul>
                    <Image className="w-100 p-2 mx-auto d-block" src="https://static.meteoro.app/Motocicletas/localizador-motoscicletas-apagado-remoto-tracker-gps.jpeg" rounded />
                    En nuestra Plataforma LBS Meteoro y Localizado GPS conseguirás lo que necesitas para tu protección y seguridad, así como la de tus unidades. Aunque se trata de un servicio de rastreo, ubicación y localizador GPS para empresas, hemos diseñado también una versión como servicio especial para proporcionarte <b>opciones de uso personal</b>.

Si deseas contar con nuestra plataforma de servicios de rastreo y localización GPS Meteoro, no dudes en comunicarte con nosotros, ¡con gusto te atenderemos!
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
