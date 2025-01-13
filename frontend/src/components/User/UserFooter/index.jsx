import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function UserFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © {currentYear} All rights reserved.
            </p>
            <small>
              Designed by <a href="https://example.com" target="_blank" rel="noreferrer" className="text-info">Vusal Huseynli</a>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default UserFooter;