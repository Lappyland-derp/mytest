import React, {useState, useEffect} from 'react'
import {Link, useLocation, useSearchParams, useNavigate} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import {login} from '../Actions/userActions'
import FormContainer from '../Components/FormContainer'
function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const{error, loading,userInfo} = userLogin

    let navigate = useNavigate()
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (userInfo) {
            navigate()
        }
    }, [navigate,userInfo,])

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(login(email, password))
    }

  return (
    <FormContainer>
        <h1>Sign In</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                type='email'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                >

                </Form.Control>
            </Form.Group>
            <Form.Group controlId='password'
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{marginTop: "10px"}}
            >

            </Form.Group>
            <Button type='submit' variant='primary'>
                Sign In
            </Button>
        </Form>
        <Row className='py-3'>
            <Col>
            Not Registered? 
            <Link to='/register'>Register</Link>
            </Col>
        </Row>
    </FormContainer>
  )
}

export default LoginScreen