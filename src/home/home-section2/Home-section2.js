import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import './Home-section2.css';
import AOS from 'aos';
import "aos/dist/aos.css";

export class Homesection2 extends Component {


  componentDidMount() {
    AOS.init({
      duration : 1000
    });
  }

  render() {
    return (
      <>
        <div className="homesection2">
          <Container >
            <Row>
              <Col data-aos={"fade-up"}>
                <h3>ELEVEIGHT VILLAS</h3>
                <p>
                Minimalistic industrial villas with private pool at the heart of Berawa. </p>

                <p>This stylish 2 bedroom villa with a private pool is tucked away in a small alley, just minutes away from the best cafes, restaurants, bars, and the Berawa beach.</p>

                <p>
                 Learn all about the Eleveight concept here.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Homesection2;
