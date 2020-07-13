import React from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

export const Newslatter = () => {
    return (
        <div className="bg-dark pb-1">
            <h4 className="text-center text-white">Reciba nuestro newsletter</h4>

            <Form.Group as={Row} controlId="formHorizontalEmail" className="mt-3 text-center text-white">
                <Form.Label column sm={2}>
                Su Email
                </Form.Label>
                <Col sm={8}>
                <Form.Control type="email" placeholder="mi_correo@mail.com" />
                </Col>
                <Col sm={2}>
                <Button variant="primary" type="submit">
                    Suscribete!
                </Button>
                </Col>
            </Form.Group>
        </div>
    )
}