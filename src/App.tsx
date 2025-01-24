import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MusicCard from "./components/MusicCard";

const App: React.FC = () => {
  return (
    <div className="container-fluid p-0">
      <Header />

      <div className="row">
        <aside className="col-12 col-md-3 col-lg-2 bg-dark text-white d-none d-md-block vh-100">
          <nav className="p-3">
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Novità
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Radio
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="col-12 col-md-9 col-lg-10 bg-black text-light py-4">
          <div className="mb-5 px-3">
            <h2 className="mb-3">Novità</h2>
            <hr></hr>
            <p className="text-secondary">Nuova stazione radio</p>
            <div className="card bg-dark text-white">
              <img src="/images/1a.png" className="card-img-top" alt="Novità" />
            </div>
            <div className="card bg-dark text-white">
              <img src="/images/1b.png" className="card-img-top" alt="Novità" />
            </div>

            <div className="card bg-dark text-white">
              <img src="/images/1c.png" className="card-img-top" alt="Novità" />
            </div>
          </div>

          <div className="mb-5 px-3">
            <h4 className="mb-3">Nuovi episodi radio</h4>
            <div className="row g-3">
              <div className="col-6 col-md-4">
                <img
                  src="/images/2a.png"
                  className="img-fluid"
                  alt="Radio Episode 1"
                />
              </div>
              <div className="col-6 col-md-4">
                <img
                  src="/images/2b.png"
                  className="img-fluid"
                  alt="Radio Episode 1"
                />
              </div>
              <div className="col-6 col-md-4">
                <img
                  src="/images/2c.png"
                  className="img-fluid"
                  alt="Radio Episode 1"
                />
              </div>
              <div className="col-6 col-md-4">
                <img
                  src="/images/2d.png"
                  className="img-fluid"
                  alt="Radio Episode 1"
                />
              </div>
              <div className="col-6 col-md-4">
                <img
                  src="/images/2e.png"
                  className="img-fluid"
                  alt="Radio Episode 1"
                />
              </div>
              <div className="col-6 col-md-4">
                <img
                  src="/images/2f.png"
                  className="img-fluid"
                  alt="Radio Episode 1"
                />
              </div>
            </div>
          </div>

          <h4 className="mb-4 ps-3">Nuove uscite</h4>
          <div className="row g-3 px-3">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="col-6 col-md-3">
                <MusicCard title={""} artist={""} image={""} />
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default App;
