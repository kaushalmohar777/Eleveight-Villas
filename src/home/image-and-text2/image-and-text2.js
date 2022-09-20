import { Component } from 'react'
import image1 from './images/TINY-OFFICES.png';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./image-and-text2.css";
import AOS from 'aos';
import "aos/dist/aos.css";

export class ImageAndText2 extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }
  render() {
    return (
      <Container className='right-image-section'>
        <Row>

          <Col xl={6} data-aos={"fade-right"}>
            <div className='textwrp'>
              <div>
                <h3>RELAX AND UNWIND</h3>
                <p>The living area has direct access to the pool and garden. Open the large glass doors and jump straight into the refreshing pool and sunbathe in the bean bags while enjoying the beautiful days in Bali during your stay with us!</p>
              </div>
            </div>
          </Col>
          <Col xl={6} data-aos={"fade-left"}>
            <img src={image1} alt="" />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ImageAndText2