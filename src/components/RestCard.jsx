import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function RestCard({restaurant}) {
  
  return (
    <div>
<p className='text-danger'>
          
<Link to={`/restview/${restaurant.id}`} style={{textDecoration:'none'}}>
            <Card style={{ width: '100' }}>
        <Card.Img height={'300px'} variant="top" src={restaurant.photograph} />
        <Card.Body>
          <Card.Title className='text-warning text-center p-2'>{restaurant.name}</Card.Title>
          <hr />
          <Row>
            <Col className='ms-4 p-3'>
            <Card.Text>
              <h5 style={{fontSize:'20px'}}>{restaurant.neighborhood}</h5>
          </Card.Text>
  
            </Col >
            <Col className='ms-4 p-3'>
            <Card.Text>
    <h5 style={{fontSize:'20px'}}>{restaurant.cuisine_type} </h5>
          </Card.Text>
  
            </Col>
          </Row>
        </Card.Body>
      </Card>
  
</Link></p>    </div>
  )
}

export default RestCard
