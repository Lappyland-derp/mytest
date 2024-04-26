import React, {useState} from 'react'
import FormContainer from '../Components/FormContainer'
import { Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { saveShippingAddress } from '../Actions/cartActions'
function ShippingScreen() {
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart
    const dispatch = useDispatch()
    const[address, setAddress] = useState(shippingAddress.address)
    const[city, setCity] = useState(shippingAddress.city)
    const[postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const[country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({address,city,postalCode,country}))
       // navigate('/payment')
    }
  return (
    <FormContainer>
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='address'>
            <Form.Control
            required
            type='text'
            placeholder='Address'
            value={address ? address : ''}
            onChange={(e) => setAddress(e.target.value)}
            >
            </Form.Control>
            </Form.Group>
            <Form.Group controlId='city'>
            <Form.Control
            required
            type='text'
            placeholder='City'
            value={city ? city : ''}
            onChange={(e) => setCity(e.target.value)}
            >
            </Form.Control>
            </Form.Group>
            <Form.Group controlId='postalCode'>
            <Form.Control
            required
            type='text'
            placeholder='PostalCode'
            value={postalCode ? postalCode : ''}
            onChange={(e) => setPostalCode(e.target.value)}
            >
            </Form.Control>
            <Form.Group controlId='country'>
            <Form.Control
            required
            type='text'
            placeholder='Country'
            value={country ? country : ''}
            onChange={(e) => setCountry(e.target.value)}
            >
            </Form.Control>
            </Form.Group>
            </Form.Group>
        </Form>
        <Button type='submit' variant='primary  '>Continue</Button>
    </FormContainer>
  )
}

export default ShippingScreen