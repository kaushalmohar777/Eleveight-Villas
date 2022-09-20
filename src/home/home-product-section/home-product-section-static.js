import { useContext, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from 'react-router-dom'
import "./home-product-section.css";
import { ShopContext } from "../../context/shopContext";
import AOS from 'aos';
import "aos/dist/aos.css";

import productimage1 from './images/product1.png'
import productimage2 from './images/product2.png'
import productimage3 from './images/product3.png'

const HomeProductStatic = () => {

  const { fetchAllProducts, products } = useContext(ShopContext)

  useEffect(() => {
    fetchAllProducts()
    return () => {
      // cleanup
    };
  }, [fetchAllProducts])

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  if (!products) return <div>Loding...</div>
  return (
    <>

      <Container fluid className="productgrid">
        <Row>
         
            <Col lg={4} data-aos={"fade-right"} className="product-details-p">
              <Link to='' style={{ textDecoration: 'none' }}>
               <img src={productimage1} />
                <div className="prod-bottom">
                  <h3>Turn On</h3>
                </div>
              </Link>
            </Col>
            <Col lg={4} data-aos={"fade-right"} className="product-details-p">
            <Link to='' style={{ textDecoration: 'none' }}>
               <img src={productimage2} />
                <div className="prod-bottom">
                  <h3>Tune In</h3>
                </div>
              </Link>
            </Col>
            <Col lg={4} data-aos={"fade-right"} className="product-details-p">
            <Link to='' style={{ textDecoration: 'none' }}>
               <img src={productimage3} />
                <div className="prod-bottom">
                  <h3>Drop Out</h3>
                </div>
              </Link>
            </Col>

        </Row>

      </Container>
    </>
  );

}

export default HomeProductStatic;
