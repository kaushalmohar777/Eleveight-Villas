import  { Component } from 'react'

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './footer.css';
import footerlogo from './images/footer.png';
import payment from './images/payment.png';
import { Link } from 'react-router-dom';

export class Footer extends Component {
  render() {
    return (
     <>
        <footer className='footer-man' id='footerMain'>
            <Container>
                <Row className='footerrow1'>
                    <Col>
                        <h3>Eleveight villas</h3>
                        <ul className='footmenu'>
                            <li><Link to=''>Turn on</Link> </li>
                            <li><Link to=''>Tune in</Link> </li>
                            <li><Link to=''>Drop out</Link> </li>
                        </ul>
                    </Col>
                    <Col>
                      <h3>Social Media</h3>
                       <ul className='footmenu'>
                            <li><a href='#' target='_blank'>Facebook</a> </li>
                            <li><a href='https://www.instagram.com/eleveight.villas/' target='_blank'>Instagram</a> </li>
                        </ul>
                    </Col>
                    <Col xl={5}>
                      <h3>Join our Newsletter</h3>
                      <p>Sign up for our newsletters and receive the latest news and tiny house deals in your email inbox</p>

                      <Form className='newsform'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          
                          <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                         Subscribe Now
                        </Button>
                      </Form>

                    </Col>
                </Row>
                <Row className='footerrow2'>
                    <Col className='footinfo'>
                      <h3>Contact information</h3>
                        <ul>
                            <li><i className="fa fa-phone" aria-hidden="true"></i><a href='tel:+62 877 2773 1372'>Phone: +62 877 2773 1372 </a> </li>
                            <li><i className="fa fa-envelope" aria-hidden="true"></i> <a href='mailto:info@eleveight.villas'>Email: info@eleveight.villas</a> </li>
                            <li><i className="fa fa-map-marker" aria-hidden="true"></i>Eleveight Villas, Jl Raya Semat, Berawa Beach, Bali</li>
                        </ul>
                    </Col>
                    <Col xl={5}>
                      <img src={footerlogo} className="footlogo"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                     
                    </Col>
                    <Col xl={5}>
                      <img src={payment}/>
                    </Col>
                </Row>
              
            </Container>
            <Container fluid className='footcopyright'>
                   <Row>
                      <Col>
                      <p>??2022 Eleveight villas .All rights reserved.</p>
                      </Col>
                      <Col>
                        <ul>
                          <li>Terms of Use</li>
                          <li>|</li>
                          <li>Privacy Policy</li>
                        </ul>
                      </Col>
                  </Row>
            </Container>
        </footer>
     </>
    )
  }
}

export default Footer