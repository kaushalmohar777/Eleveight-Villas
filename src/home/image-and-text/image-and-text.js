import { Component } from 'react'
import image1 from './images/DURABILITY.png';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./image-and-text.css";
import AOS from 'aos';
import "aos/dist/aos.css";

export class ImageAndText extends Component {

  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }
  render() {
    return (
      <Container className='left-image-section'>
        <Row>
          <Col xl={6} data-aos={"fade-right"}>
            <img src={image1} alt="" />
          </Col>
          <Col xl={6} data-aos={"fade-left"}>
            <div className='textwrp'>
              <div>
                <h3>THE ELEVEIGHT HOSPITALITY</h3>
                <p>A comfortable large couch area in the living room will be your favorite spot to hang out and enjoy your time with your family and friends during the day or in the evening while watching your favorite show/movie.</p>

                <p>The fully equipped kitchen area overlooking the pool has a bar table that seats 5 people to enjoy your meals and drinks.</p>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ImageAndText