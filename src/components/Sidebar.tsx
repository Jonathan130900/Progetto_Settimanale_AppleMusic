import React from "react";
import appleMusicLogo from "../assets/logos/music.svg";

const Sidebar: React.FC = () => {
  return (
    <aside
      className="bg-dark text-white d-none d-md-block vh-100 position-fixed d-flex flex-column align-items-center"
      style={{ width: "250px" }}
    >
      <div className="p-3">
        <img
          src={appleMusicLogo}
          alt="Sidebar Logo"
          className="img-fluid"
          style={{
            maxWidth: "100px",
            height: "40px",
            filter: "invert(100%) brightness(100%)",
          }}
        />
      </div>
      <nav className="p-3 w-100">
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
      </nav>
    </aside>
  );
};

export default Sidebar;
