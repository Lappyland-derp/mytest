import React, {useEffect, useState} from 'react'
import { Card,Image, Col, Row, Container,ListGroup, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
function ProductScreen() {
    const {id} = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const {data} = await axios.get(`/api/products/${id}`)
            setProduct(data)
        }
        fetchProducts()
    })
  return (
    <Container>
    <Row >
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid/>
        </Col>

        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    {product.description}
                </ListGroup.Item>
                <ListGroup.Item>
                    {product.rating} stars
                    <Container></Container>
                    {product.numReviews}
                </ListGroup.Item>
            </ListGroup>
        </Col>

        <Col md={3}>
            <Card>
                <ListGroup>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col>${product.price}</Col>
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

export default ProductScreen