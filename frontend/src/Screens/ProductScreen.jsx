import React, {useEffect, useState} from 'react'
import { Card,Image, Col, Row, Container,ListGroup, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
function CreatorScreen() {
    const {id} = useParams()
    const [creator, setCreator] = useState([])

    useEffect(() => {
        async function fetchCreators() {
            const {data} = await axios.get(`/api/creators/${id}`)
            setCreator(data)
        }
        fetchCreators()
    })
  return (
    <Container>
    <Row >
        <Col md={6}>
            <Image src={creator.image} alt={creator.name} fluid/>
        </Col>

        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{creator.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    {creator.description}
                </ListGroup.Item>
                <ListGroup.Item>
                    {creator.rating} stars
                    <Container></Container>
                    {creator.numReviews}
                </ListGroup.Item>
            </ListGroup>
        </Col>

        <Col md={3}>
            <Card>
                <ListGroup>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col>${creator.price}</Col>
                        </Row>
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                        <Button className='btn-block' type='button'>Add to Cart</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
</Container>
  )
}

export default CreatorScreen