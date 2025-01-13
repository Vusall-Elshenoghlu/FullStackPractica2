import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Card, Col, Container, Row, Spinner, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router';
import { FaHeart } from 'react-icons/fa';

function UserHumanDetail() {
  const { id } = useParams();
  const [human, setHuman] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function getHumanById() {
    axios.get("http://localhost:4000/api/humans/" + id)
      .then((res) => {
        setHuman(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    getHumanById();
  }, [id]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
    <div className="cardss" style={{height:"100vh", width:"100%", backgroundColor:"#F7F7F7"}}>
    <Container>
      <Row>
        <Col>
          <Card className="card" style={{ width: "350px", height: "620px", backgroundColor: "aqua" }}>
            <Card.Img src={human.image} alt={human.fullName} />
            <Card.Body style={{ backgroundColor: "#FFFFFF" }}>
              <Card.Title>{human.fullName}</Card.Title>
              <Card.Text>{human.age} y.o</Card.Text>
              <Card.Text>{human.profession}</Card.Text>
              <Card.Text>{human.description}</Card.Text>
              <div className="d-flex justify-content-center">
                <button className="btn btn-outline-primary mx-2"><FaHeart /></button>
                <button className="btn btn-outline-warning" onClick={() => navigate("/")}>
                  Back To Menu
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container></div>
    </>
  );
}

export default UserHumanDetail;
