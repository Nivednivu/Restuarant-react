import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchresataurant } from '../redux/restaurantSlice'

function Home() {
  // accessing the state
   const allrestaurant = useSelector((state)=>state.restaurantslce.allrestaurant)
   console.log(allrestaurant);
   const dispatch = useDispatch()
   useEffect(()=>{
    // to usestate value in state by using thunk api call
    dispatch(fetchresataurant())
   },[])
  return (
    <>
      <Row >
       {allrestaurant?.length>0? 
       allrestaurant.map((restaurant)=>(
        <Col sm={6} md={4} className='px-5 py-5'>
          
        <RestCard restaurant={restaurant}/>
      </Col>
       )):
        <p className='text-danger'>nothing to dispalay</p> }
      </Row>
    </>
  )
}

export default Home
