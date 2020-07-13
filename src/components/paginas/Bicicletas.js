import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {Container, Col, Row, Jumbotron, Image, Accordion, Card, Button} from 'react-bootstrap';
import { Footer } from '../Footer';

export const Bicicletas = () => {
    return (
        <div>
        <Container className="mt-3">
            <Row>
                <Col xs={12} md={8}>
                <Jumbotron>
                    <h1 className="text-primary">Meteoro GPS-Bicicletas</h1>
                    <p className="text-justify">
                    <Image align="right" className="jumbo-image p-2" src="https://static.meteoro.app/Bicicletas/candado-bicicleta-seguridad-anti-robo.jpeg" rounded />
                    Es importante tener un Localizador GPS porque te permitirá rastrearlas en caso de robo. Nuestra Plataforma LSB te brinda el sistema necesario para que la recuperes, porque cuenta con una tecnología de IoT (Internet of Things) que posee una interfaz intuitiva.
                    <br />
                    Actualmente es más fácil robar una bicicleta que un vehículo y más si se trata de un modelo nuevo. Por ello, contar con un Localizador GPS en tus Bicicletas te permitirá saber su ubicación en tiempo real.
                    <br />
                    A continuación, te enseñaremos las funciones del Localizador GPS Meteoro para Bicicletas te permitirá saber su ubicación en tiempo real.
                    <br />
                    A continuación, te enseñaremos las funciones del Localizador GPS Meteoro para Bicicletas y como te beneficiara usarlo.
                    <Accordion className="my-3">
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Ubicación
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body><p>Te permite ubicar fácilmente las bicicletas a tiempo real y puedes tener los registros de las rutas personalizadas. Si cuentas con una empresa con flota de bicicletas, este servicio te permitirá rastrearlas en tiempo real, en todo momento.</p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Seguridad
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body><p>Posee un sistema de seguridad totalmente eficaz que permite enviarte alertas a través de SMS y Correos electrónicos en caso de que ocurra alguna eventualidad o alguna unidad se desvíe de la ruta personalizada.</p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Rastreo
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body><p>El acceso de rastreo para tu Bicicleta es posible hacerlo desde un teléfono inteligente, mediante la App de Meteoro. Lo que te permitirá monitorear a tus unidades y empleados cuenta con software y sensores instalados para brindar una conexión rápida y efectiva.</p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            Configuraciones
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                            <Card.Body><p>La Plataforma LSB Meteoro está diseñada con una configuración sencilla para facilitar su uso. Cuenta con una batería de larga duración y un sensor de movimiento para medir las distancias recorridas y tiempo de uso de tu bicicleta.</p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                Adaptación
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                            <Card.Body><p>Instalar el sistema de Localizador GPS es fácil porque es adaptable a cualquier manillar de Bicicleta o sillin. Es importante que verifiques dentro del manillar antes de hacer la instalación para asegurarte que no haya nada que la obstruya.</p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="5">
                            Localizador GPS
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="5">
                            <Card.Body><p>Nuestro sistema de localizador GPS es ideal para sistemas de entregas y encomiendas, pues permitirá que tus productos o mercancía lleguen sin contratiempos hasta tu cliente.</p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                        Tendrás excelentes resultados si usas el sistema de localización y rastreo de nuestra Plataforma LSB. Porque cuenta con la más innovadora tecnología convirtiendo a Meteoro en una de las mejores empresas con servicios de Localizador GPS para Bicicletas.
                        <br />
                        Deseamos que cuentes con la mayor seguridad de tus activos y como pensamos en ti, Plataforma LSB Meteoro estamos dispuestos a seguir creando sistemas que te brinden ayuda, seguridad y tranquilidad. Pregúntanos por nuestro servicio GPS para bicicletas por unidad, pues también tenemos opciones personalizadas.
                        <br />
                        Si deseas dejarnos tu comentario o tienes dudas, ¡escríbenos! Estaremos encantados de saber tu opinión y de responder tus inquietudes. 
                    <Image className="w-100 p-2 mx-auto d-block" src="https://static.meteoro.app/Bicicletas/rodada-bici-nocturna-seguridad-gps.jpeg" rounded />

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
