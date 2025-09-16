import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/aivolutionaries_logo-removebg-preview.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col xs={12} sm={6} className="text-center text-sm-start mb-3 mb-sm-0">
            <img src={logo} alt="Logo" />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/aivolutionaries/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.instagram.com/ai.volutions_/"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2025 AIvolution. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
