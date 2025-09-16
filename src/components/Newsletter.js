import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col xs={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row className="align-items-center">
          <Col xs={12} lg={6} xl={5} className="text-center text-lg-start">
            <h3>
              Join Our WhatsApp Group & Access All Our Resources
            </h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col xs={12} lg={6} xl={7} className="mt-3 mt-lg-0">
            <div className="new-email-bx">
              <a href="https://chat.whatsapp.com/IAwNmxi4lyG8z52Zh3QTbU?mode=ems_copy_t" target="_blank" rel="noopener noreferrer">
                <button type="button">Get Access!</button>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
