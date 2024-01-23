import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { search } from '../redux/restaurantSlice';
import { useDispatch } from 'react-redux';
function Header() {
  const dispatch = useDispatch()
  return (
   
      <Navbar variant='dark'>
        
        <Container>
          <Navbar.Brand href="#home"className='d-flex p-3'>
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/3448/3448609.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           <h5 className='text-danger'> Foot <span className='text-warning'>Circle</span></h5> 
           <input onChange={(e)=>dispatch(search(e.target.value))} type="text" style={{marginLeft:'750px'}} placeholder='Search by nieghborfood ' className='form-control'/>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header
