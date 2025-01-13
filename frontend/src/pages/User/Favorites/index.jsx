import React from 'react'

import { useContext } from 'react'
import { Container,Row,Card,Button,Nav,Col } from 'react-bootstrap'
import { FaInfo,FaTrash,FaShoppingCart } from 'react-icons/fa'
import Swal from "sweetalert2";
import { FavoritesContext } from '../../../context/FavoritesContext';

function Favorites() {
  const { favorites,removeFromFavorites } = useContext(FavoritesContext)
  function removeFromFavoritess(id){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromFavorites(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your favorite has been deleted.",
          icon: "success"
        });
      }
    });
  }
  return (
    <>
      {
        favorites.length == 0 ? (
          <h1>There is no Favorites...</h1>
        ) : (
          <Container>
            <Row>
              {
                favorites.map(favorite => 
                  <Col md={3} key={favorite._id} className="mb-5">
                  <Card className='card'>
                    <Card.Img src = {favorite.image} />
                    <Card.Body>
                      <Card.Title>{favorite.fullName}</Card.Title>
                      <Card.Text>
                        {favorite.age} y.o
                      </Card.Text>
                      <Card.Text>
                        {favorite.profession}
                      </Card.Text>
                      <div className="d-flex justify-content-center">
                      <Nav.Link href={`/products/${favorite._id}`}>
                        <button className='btn btn-outline-warning'>
                          <FaInfo />
                        </button>
                      </Nav.Link>
                      <button className='btn btn-outline-danger mx-2' onClick={() => removeFromFavoritess(favorite._id)}>
                        <FaTrash />
                      </button>
                      <button className='btn btn-outline-primary' >
                        Add <FaShoppingCart />
                      </button>
                    </div>
                      
                      
                    </Card.Body>
                  </Card>
                  </Col>
                )
              }
            </Row>
          </Container>

        )
      }
    </>
  )
}

export default Favorites