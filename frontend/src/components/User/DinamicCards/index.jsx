import React, { useContext, useEffect, useState } from 'react';
import axios from "axios"
import { Card, Col, Container, Nav, Row, Spinner,Button } from 'react-bootstrap';
import { FaHeart, FaInfo, FaPlus } from 'react-icons/fa';
import "./Dinamic.css"
import { FavoritesContext } from '../../../context/FavoritesContext';
function DinamicCards() {
    const [humans, setHumans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("")
    let {addToFavorites,favorites} = useContext(FavoritesContext)
    function getHumans() {
        axios.get("http://localhost:4000/api/humans")
            .then((res) => {
                setHumans(res.data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })
    }
    useEffect(() => {
        getHumans()
    }, [])
    const filteredHumans = humans.filter((human) => {
        return human.fullName && human.fullName.toLowerCase().includes(searchQuery.toLowerCase());
    });
    if (loading) return <Spinner animation='border' />
    if (error) return <div> Error:{error.message}</div>
    return (
        <>
            <div className="dinamic">
                <Container>
                    <Col md={12} className="d-flex align-items-center" style={{ gap: "10px" }}>
                        <hr className="red-line" style={{ width: '50px', borderTop: '3px solid red' }} />
                        <span style={{ color: '#f5222d', fontWeight: 'bold', marginRight: '10px' }}>OUR PROFESSIONAL MEMBERS</span>
                    </Col>
                    <Row className="mb-5">
                        <Col md={12}>
                            <h2 style={{ fontWeight: 'bold' }}>OUR TEAM MAMBERS</h2>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search human by name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                        </div>
                        <Nav.Link href={`addhuman`}>
                            <Button variant="success">
                                <FaPlus className="me-2" />
                                Add Human
                            </Button>
                        </Nav.Link>
                    </div>
                    <Row>
                        {
                            filteredHumans.map((human) => (
                                <Col md={4} key={human._id} className='mb-5'>
                                    <Card className='card' style={{ width: "350px", height: "620px", backgroundColor: "aqua" }}>
                                        <Card.Img src={human.image} alt={human.fullName} />
                                        <Card.Body style={{ backgroundColor: "#FFFFFF", }}>
                                            <Card.Title>{human.fullName}</Card.Title>
                                            <Card.Text>{human.age} y.o</Card.Text>
                                            <Card.Text>{human.profession}</Card.Text>
                                            <div className='d-flex justify-content-center'>
                                                <Nav.Link href={"/humans/" + human._id}>
                                                    <button className='btn btn-outline-warning'>
                                                        <FaInfo />
                                                    </button>
                                                </Nav.Link>
                                                <button className='btn btn-outline-primary mx-2' onClick={() => addToFavorites(human)}><FaHeart /></button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default DinamicCards
