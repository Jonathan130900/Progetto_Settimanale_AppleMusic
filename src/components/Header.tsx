import React, { useState } from "react";
import { Navbar, Container, Button, Form, Offcanvas } from "react-bootstrap";
import appleLogo from "../assets/logos/apple.svg";
import appleMusicLogo from "../assets/logos/music.svg";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShow = () => setShowMenu(true);
  const handleClose = () => setShowMenu(false);

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="md"
        className="px-3 py-2 shadow-sm d-none d-md-flex w-100 justify-content-between position-fixed top-0"
        style={{
          zIndex: 1030,
          left: "250px",
          width: "calc(100% - 250px)",
          maxWidth: "calc(100vw - 250px)",
        }}
      >
        <Container fluid>
          <div className="d-flex align-items-center">
            <i className="bi bi-shuffle fs-6 text-secondary me-2"></i>
            <i className="bi bi-rewind-fill fs-4 text-secondary me-2"></i>
            <i className="bi bi-play-fill fs-2 text-secondary me-2"></i>
            <i className="bi bi-fast-forward-fill fs-4 text-secondary me-2"></i>
            <i className="bi bi-repeat fs-6 text-secondary me-2"></i>
          </div>

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
            />
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center me-3">
              <i
                className="bi bi-volume-down-fill me-2"
                style={{ color: "#aaa" }}
              ></i>
              <Form.Range
                style={{
                  width: "150px",
                  backgroundColor: "#2b2b2b",
                  accentColor: "firebrick",
                }}
              />
            </div>

            <Button
              style={{
                backgroundColor: "firebrick",
                color: "white",
                border: "none",
              }}
            >
              <i className="bi bi-person-fill me-2 text-white"></i>
              Accedi
            </Button>
          </div>
        </Container>
      </Navbar>

      <Navbar
        bg="dark"
        variant="dark"
        className="px-3 py-2 shadow-sm d-md-none w-100 justify-content-between position-fixed top-0"
        style={{ zIndex: 1030, left: "0px", width: "100%" }}
      >
        <Container
          fluid
          className="d-flex align-items-center justify-content-between"
        >
          <Button
            onClick={handleShow}
            style={{
              color: "firebrick",
              border: "none",
              background: "none",
            }}
          >
            <i className="bi bi-list"></i>
          </Button>

          <Navbar.Brand href="#" className="fw-bold fs-4 mx-auto">
            <img
              src={appleMusicLogo}
              alt="Apple Logo"
              className="me-2"
              style={{
                height: "18px",
                filter: "invert(100%) brightness(200%)",
              }}
            />
          </Navbar.Brand>

          <Button
            style={{
              backgroundColor: "firebrick",
              color: "white",
              border: "none",
            }}
          >
            <i className="bi bi-person-fill me-2 text-white"></i>
            Accedi
          </Button>
        </Container>
      </Navbar>

      <Offcanvas
        show={showMenu}
        onHide={handleClose}
        placement="start"
        className="bg-dark text-firebrick"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled">
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none fs-5">
                <i className="bi bi-house-door me-2"></i> Home
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none fs-5">
                <i className="bi bi-music-note-list me-2"></i> Novità
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none fs-5">
                <i className="bi bi-broadcast me-2"></i> Radio
              </a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
