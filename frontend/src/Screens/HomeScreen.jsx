import React, {useState, useEffect} from 'react'
import creators from '../creators'
import {Row,Col} from 'react-bootstrap'
import Creator from '../Components/Creator'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {listCreators} from '../Actions/creatorActions'
import Loader from '../Components/Loader'
import Message from '../Components/Message'

function HomeScreen() {
    const dispatch = useDispatch()
    const creatorList = useSelector(state => state.creatorList)
    const {error, loading,creators} = creatorList
    
    
    useEffect(() =>{
        dispatch(listCreators())
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
            {creators.map((creator) => (
                <Col key={creator._id} sm={12} md={6} lg={4} xl={3}>
                    <Creator creator={creator}/>
                </Col>
            ))}
        </Row>
        )
    }
    </div>
  )
}

export default HomeScreen