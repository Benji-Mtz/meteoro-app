import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'

export const ContendorCards = () => {
    return (
        <Container>
            <h1 className="text-primary">Servicios</h1>
            
            <CardDeck className="mt-2">
                <Card border="primary">
                    <Card.Header>1</Card.Header>
                        <Card.Body>
                        <Card.Title className="text-primary" >Rastreo de Localización y Vehículo</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                        </Card.Text>
                        
                        </Card.Body>
                    <Card.Footer>
                    <Button variant="primary" className="btn btn-block" >Solicita una demostracion</Button>
                    </Card.Footer>
                </Card>
                <Card border="primary">
                    <Card.Header>2</Card.Header>
                        <Card.Body>
                        <Card.Title className="text-primary" >Rastreo y Localización y Bienes y Personas</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                        </Card.Text>
                        
                        </Card.Body>
                    <Card.Footer>
                    <Button variant="primary" className="btn btn-block" >Solicita una demostracion</Button>
                    </Card.Footer>
                </Card>
                <Card border="primary">
                    <Card.Header>3</Card.Header>
                        <Card.Body>
                        <Card.Title className="text-primary" >Administración de flotas</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                        </Card.Text>
                        
                        </Card.Body>
                    <Card.Footer>
                    <Button variant="primary" className="btn btn-block" >Solicita una demostracion</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>

            <CardDeck className="mt-2">
                <Card border="primary">
                    <Card.Header>4</Card.Header>
                        <Card.Body>
                        <Card.Title className="text-primary" >Servicios basados en la localización con todas las funciones</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                        </Card.Text>
                        
                        </Card.Body>
                    <Card.Footer>
                    <Button variant="primary" className="btn btn-block" >Solicita una demostracion</Button>
                    </Card.Footer>
                </Card>
                <Card border="primary">
                    <Card.Header>5</Card.Header>
                        <Card.Body>
                        <Card.Title className="text-primary" >Aplicaciones móviles</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                        </Card.Text>
                        
                        </Card.Body>
                    <Card.Footer>
                    <Button variant="primary" className="btn btn-block" >Solicita una demostracion</Button>
                    </Card.Footer>
                </Card>
                <Card border="primary">
                    <Card.Header>6</Card.Header>
                        <Card.Body>
                        <Card.Title className="text-primary" >Monitoreo del cargamento </Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                        </Card.Text>
                        
                        </Card.Body>
                    <Card.Footer>
                    <Button variant="primary" className="btn btn-block" >Solicita una demostracion</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </Container>
    )
}
