import React from 'react'
import { Container, Row, Col,Nav} from 'react-bootstrap'
import { Link, } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

function Footer() {
return (
    <div>
    <footer style={{ backgroundColor: "#343a40", color: "white", width: "100%", marginTop: "80vh" }}>
        <Container>
            <Row>
            <div className='Terms'>
            <LinkContainer to="TOS">  
                <Nav.Link>Terms of Service</Nav.Link>
            </LinkContainer>
            </div>

            <Container>
            Contact Us via <i class="fa-solid fa-phone"/> / <i class="fa-solid fa-sms"/> at 2546-789-1632 
            Or <i class="fa-solid fa-envelope"/> PreSocial2024@google.com
            </Container>

            
                <Col className='text-right' color='black'>Copyright &copy; 2024 PreSocial All Rights Reserved</Col>
                    <Col className='call' color='black'>
                    Visit Us
                    <Link to="https://github.com/" target="_blank" style={{paddingLeft: "3vh"}}>
                    <i class="fa-brands fa-github fa-lg"></i>
                    </Link>
                    
                    <Link to="https://www.google.com/" target="_blank" style={{paddingLeft: "3vh"}}>
                    <i class="fa-brands fa-google fa-lg"></i>
                    </Link>
                    
                    <Link to="https://www.facebook.com/" target="_blank" style={{paddingLeft: "3vh"}}>
                    <i class="fa-brands fa-facebook-f fa-lg"></i>
                    </Link>
            
                    <Link to="https://twitter.com/" target="_blank" style={{paddingLeft: "3vh"}}>
                    <i class="fa-brands fa-twitter fa-lg"></i>
                    </Link>
                </Col>
            </Row>
        </Container>
    </footer>
    </div>
)
}

export default Footer