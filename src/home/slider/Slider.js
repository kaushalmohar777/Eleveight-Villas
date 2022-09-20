import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from "react";
import slideimg1 from './images/slide1.png';
import slideimg2 from './images/slide2.png';
import slideimg3 from './images/slide3.png';
import slideimg4 from './images/slide4.png';
import './Slider.css';
import AOS from 'aos';
import "aos/dist/aos.css";

function Slider() {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <Carousel className='sliderman' data-aos={"fade"}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideimg1}
          alt="First slide"
        />
        <Carousel.Caption data-aos={"fade-up"} data-aos-delay="500">
          <h3>Welcome to<br/> eleveight villas</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideimg2}
          alt="Second slide"
        />
        <Carousel.Caption data-aos={"fade-up"}>
          <h3>Welcome to<br/> eleveight villas</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideimg3}
          alt="Second slide"
        />
        <Carousel.Caption data-aos={"fade-up"}>
          <h3>Welcome to<br/> eleveight villas</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideimg4}
          alt="Second slide"
        />
        <Carousel.Caption data-aos={"fade-up"}>
          <h3>Welcome to<br/> eleveight villas</h3>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;