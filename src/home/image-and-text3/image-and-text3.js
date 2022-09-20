import { Component } from 'react'
import image1 from './images/TINY-BAR.png';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./image-and-text3.css";
import AOS from 'aos';
import "aos/dist/aos.css";

export class ImageAndText3 extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }
  render() {
    return (
      <Container className='left-image-section last-sec'>
        <Row>
          <Col xl={6} data-aos={"fade-right"}>
            <img src={image1} alt="" />
          </Col>
          <Col xl={6} data-aos={"fade-left"}>
            <div className='textwrp'>
              <div>
                <h3>WIND DOWN</h3>
                <p>The concrete stairs lead you upstairs where you will find the stunning 2 bedrooms with a comfortable bed, en-suite bathroom, a small desk and a nice little balcony. We will make sure you have the ultimate relaxing stay in the bustling Berawa, Canggu!</p>
                <p>We are looking forward to welcoming you in paradise and helping you to create perfect memories in this stunning villa in Berawa!</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ImageAndText3