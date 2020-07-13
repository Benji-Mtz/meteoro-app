import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { Carrusel } from '../Carrusel';
import { Newslatter } from '../Newslatter';
import { ContendorCards } from '../ContendorCards';
import { Footer } from '../Footer';

export const Home = () => {
  return (
    <div>
      <Row>
        <Col>
          <Carrusel />
        </Col>
      </Row>
      <Row>
        <Col>
          <Newslatter />
        </Col>
      </Row>
      <Row>
        <Col>
          <ContendorCards />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </div>
  );
}