import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCogs, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import './HeroCards.css';  // Custom styles

const HeroCards = () => {
  return (
    <Container className="hero-cards-section mt-5">
      {/* "Our Top Services" */}
      <Row className="mb-3">
        <Col md={12} className="d-flex align-items-center"style={{gap:"10px"}}>
          <hr className="red-line" style={{ width: '50px', borderTop: '3px solid red' }} /> 
          <span style={{ color: '#f5222d', fontWeight: 'bold', marginRight: '10px' }}>OUR TOP SERVICES</span>
        </Col>
      </Row>
      {/* "Our Best Services" */}
      <Row className="mb-5">
        <Col md={12}>
          <h2 style={{ fontWeight: 'bold' }}>Our Best Services</h2>
        </Col>
      </Row>
      
      {/* Cards Section */}
      <Row>
        {/* First Card */}
        <Col md={4} className="mb-4">
          <Card className="text-center p-3 shadow-sm">
            <FaCogs size={50} color="#f5222d" className="mb-3 icon-centered" />
            <Card.Body>
              <Card.Title>Strategy Planning</Card.Title>
              <Card.Text>
                There are many variations of passages of lorem ipsum available but the majority have suffered.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Card */}
        <Col md={4} className="mb-4">
          <Card className="text-center p-3 shadow-sm">
            <FaShieldAlt size={50} color="#f5222d" className="mb-3 icon-centered" />
            <Card.Body>
              <Card.Title>Insurance Service</Card.Title>
              <Card.Text>
                There are many variations of passages of lorem ipsum available but the majority have suffered.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Third Card */}
        <Col md={4} className="mb-4">
          <Card className="text-center p-3 shadow-sm">
            <FaChartLine size={50} color="#f5222d" className="mb-3 icon-centered" />
            <Card.Body>
              <Card.Title>Audit & Evaluation</Card.Title>
              <Card.Text>
                There are many variations of passages of lorem ipsum available but the majority have suffered.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroCards;
