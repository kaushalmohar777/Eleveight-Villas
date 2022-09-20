import { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel from "react-bootstrap/Carousel";
import "./testimonials.css";
import icon from './images/testiicon.png';
import AOS from 'aos';
import "aos/dist/aos.css";


export class Testimonials extends Component {

  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }


  render() {
    
    return (
      <div className="Testimonialman">
        <Container>
          <Row>
            <Col data-aos={"fade-left"}>
              <Carousel controls={false} touch={true}>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={icon}
                    alt="First slide"
                  />

                  <h3>- Robert S.</h3>
                  <p>
                    “Nice spot and very helpful and kind staff.”
                  </p>

                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={icon}
                    alt="Second slide"
                  />


                  <h3>- Maya J.</h3>
                  <p>
                  “The villa is perfectly located in close proximity to coffee shops and restaurants and managed by kind and attentive staff.”
                  </p>

                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>

                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={icon}
                    alt="Third slide"
                  />

                  <h3>- Adrian D.</h3>
                  <p>
                    “The villa was good value for money.”
                  </p>

                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>

                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
          <Row className="Testimonialman-row2" data-aos={"fade-up"}>
            <Col>
              <h3>Testimonials</h3>
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default Testimonials;
