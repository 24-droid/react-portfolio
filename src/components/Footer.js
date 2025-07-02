import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github.svg";
import navIcon3 from "../assets/img/icons8-twitterx.svg";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}></Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/om-singh-it/">
                <img src={navIcon1} alt="" />
              </a>
            </div>
            <a href="https://github.com/24-droid">
              <img src={navIcon2} alt="" className="social-icons" />
            </a>
            <a href="https://x.com/24_droid_2005?t=a13ZdYvvlsBd53ks8VUNXw&s=08">
              <img src={navIcon3} alt="" className="social-icons" />
            </a>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
