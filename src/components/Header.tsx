import React from "react";
import { Navbar, Container, Button, Form } from "react-bootstrap";
import appleLogo from "../assets/logos/apple.svg";

const Header: React.FC = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      className="px-3 py-2 shadow-sm d-none d-md-flex w-100 justify-content-between"
    >
      <Container fluid>
        <div className="d-flex align-items-center">
          <i className="bi bi-shuffle fs-6 text-secondary me-2"></i>
          <i className="bi bi-skip-backward-fill fs-4 text-secondary me-2"></i>
          <i className="bi bi-play-fill fs-2 text-secondary me-2"></i>
          <i className="bi bi-skip-forward-fill fs-4 text-secondary me-2"></i>
          <i className="bi bi-repeat fs-6 text-secondary me-2"></i>
        </div>{" "}
        <Navbar.Brand href="#" className="fw-bold fs-4 mx-auto">
          <img
            src={appleLogo}
            alt="Apple Logo"
            className="me-2"
            style={{
              height: "40px",
              filter:
                "invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(90%)",
            }}
          />{" "}
        </Navbar.Brand>
        <div className="d-flex align-items-center">
          <Form.Range className="me-3" style={{ width: "150px" }} />
          <Button variant="outline-light">Accedi</Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
