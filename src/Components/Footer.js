import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MailChimpForm  from "../Components/MailChimpForm";
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'


const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row className='align-items-center'>
                <MailChimpForm />
                <Col sm={6}>
                    <img src={logo} alt="Logo" />
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className="social-icon">
                        <a href=''><img src={navIcon1} /></a>
                        <a href=''><img src={navIcon2} /></a>
                        <a href=''><img src={navIcon3} /></a>
                    </div>
                    <p>&copy; 2022, All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer