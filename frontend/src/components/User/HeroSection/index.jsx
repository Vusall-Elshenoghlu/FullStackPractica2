import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/030/049/598/large_2x/ceo-sitting-at-desk-with-laptop-and-phone-wearing-smartwatch-free-photo.jpg")', backgroundSize: 'cover', height: '100vh', color: '#fff' }}>
      <Container className="d-flex justify-content-center align-items-center h-100">
        <Row>
          <Col md={6}>
            <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>We help to grow your business</h1> {/* Daha böyük başlıq */}
            <p style={{ fontSize: '1.2rem' }}>Multi annu labourn druis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> {/* Daha böyük mətn */}
            <Button variant="danger" size="lg">Our Services</Button> {/* Böyük düymə */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
