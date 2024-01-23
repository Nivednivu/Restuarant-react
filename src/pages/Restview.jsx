import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Restview() {
  const [show, setShow] = useState(false);

  const {id} = useParams()
  console.log(id);
  
  const allrestaurant = useSelector((state)=>state.restaurantslce.allrestaurant)
  console.log(allrestaurant);

  const selectedRestuarant = allrestaurant.find(Item=>Item.id==id)
  console.log(selectedRestuarant);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <Row className='my-5'>
          <Col md={1}>

          </Col>
          <Col md={3}>
            <img width={'100%'}height={'75%'} src={selectedRestuarant.photograph} alt="no image" />
          </Col>
          <Col md={7} className='px-5'>
            <hr />
            <h4 className='text-center'> <span className='text-warning'>Restaurant</span> details</h4>
            <hr />
            <ListGroup>
      <ListGroup.Item className='text-center p-4'><h4>{selectedRestuarant.name}</h4></ListGroup.Item>
      <ListGroup.Item>{selectedRestuarant.neighborhood}</ListGroup.Item>
      <ListGroup.Item>{selectedRestuarant.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>{selectedRestuarant.address}</ListGroup.Item>
      <ListGroup.Item className=' text-center p-4'>
        <button className='btn btn-warning me-4 'onClick={handleShow}>Operating Hours</button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Operrating</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>monday:{selectedRestuarant.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>tuesday:{selectedRestuarant.operating_hours.Tuesday}</ListGroup.Item>
      <ListGroup.Item>wendnesday:{selectedRestuarant.operating_hours.Wednesday}</ListGroup.Item>
      <ListGroup.Item>thursday:{selectedRestuarant.operating_hours.Thursday}</ListGroup.Item>
      <ListGroup.Item>friday:{selectedRestuarant.operating_hours.Friday}</ListGroup.Item>
      <ListGroup.Item>saturday:{selectedRestuarant.operating_hours.Saturday}</ListGroup.Item>
      <ListGroup.Item>sunday:{selectedRestuarant.operating_hours.Sunday}</ListGroup.Item>
    </ListGroup>
        </Modal.Body>
      </Modal>

      <RestReview reviews={selectedRestuarant.reviews}/>

      </ListGroup.Item>
    </ListGroup>
          </Col>
          <Col md={1}></Col>
        </Row>
      
    </div>
  )
}

export default Restview
