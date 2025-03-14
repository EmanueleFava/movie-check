import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import './FooterComponent.css';
import logo from '../../assets/movie.png'; 
import { Link } from 'react-router-dom';

function FooterComponent() {

  const scrollToTop = () => {
		window.scrollTo({
		top: 0,
		behavior: 'smooth'
		});
 	};
  
  return (
    <Navbar expand="lg" className="footer-custom">
		<Container>
			<Row className="w-100 d-flex align-items-center justify-content-between"> {/* Flexbox per allineare tutti gli elementi */}
			
			<Col xs={12} sm={6} md={4} className="text-start"> {/* Colonna a sinistra */}
				<div className="d-flex align-items-center"> 
				<p className="mb-0 me-3">Follow Movie Check</p>
				<div className="social-icons">
					<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
					<i className="fab fa-instagram icon"></i>
					</a>
					<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
					<i className="fab fa-twitter icon"></i>
					</a>
					<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
					<i className="fab fa-facebook icon"></i>
					</a>
				</div>
				</div>
			</Col>

			<Col xs={12} sm={6} md={4} className="d-flex justify-content-center"> {/* Colonna centrale per la freccia */}
				<div className="scroll-to-top" onClick={scrollToTop}>
					<i className="fas fa-arrow-up"></i> 
				</div>
			</Col>

			<Col xs={12} sm={6} md={4} className="text-end"> {/* Colonna a destra per il logo */}
			<Link to="/"><img src={logo} alt="Logo" className="footer-logo" /></Link>  
			</Col>
			</Row>
		</Container>
    </Navbar>
  );
}

export default FooterComponent;