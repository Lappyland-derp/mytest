import React, {useState, useEffect} from 'react'
import products from '../products'
import {Row,Col} from 'react-bootstrap'
import Product from '../Components/Product'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {listproducts} from '../Actions/productActions'
import Loader from '../Components/Loader'
import Message from '../Components/Message'

function HomeScreen() {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {error, loading,products} = productList
    
    
    useEffect(() =>{
        dispatch(listProducts())
    }, [])

  return (
    <div style={{paddingBottom: "20vh"}}>
        <h1>Creators</h1>
        {loading ? (
            <Loader/>
        ) : error ? (
            <Message variant='danger'>{error}</Message>
        ) : (
    
        <Row>
            {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                </Col>
            ))}
        </Row>
        )
    }
    </div>
  )
}

export default HomeScreen