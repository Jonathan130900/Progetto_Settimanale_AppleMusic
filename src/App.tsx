import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import MusicCard from "./components/MusicCard";
import { Carousel } from "react-bootstrap";

const App: React.FC = () => {
  return (
    <div className="container-fluid p-0">
      <Header />

      <div className="d-none d-md-flex">
        <Sidebar />
        <main
          className="flex-grow-1 bg-black text-light px-4 pt-7 py-10"
          style={{ marginLeft: "250px", marginTop: "68px" }}
        >
          <div className="mb-5 px-3">
            <h2 className="mb-3 mt-4">Novità</h2>
            <hr />
            <p className="text-secondary">Nuova stazione radio</p>
            <Carousel>
              <Carousel.Item>
                <img
                  src="/images/1a.png"
                  className="d-block w-100"
                  alt="Novità"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/images/1b.png"
                  className="d-block w-100"
                  alt="Novità"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/images/1c.png"
                  className="d-block w-100"
                  alt="Novità"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="mb-5 px-3">
            <h4 className="mb-3">Nuovi episodi radio</h4>
            <div className="row g-3">
              {["2a", "2b", "2c", "2d", "2e", "2f"].map((img, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-3">
                  <img
                    src={`/images/${img}.png`}
                    className="img-fluid"
                    alt="Radio Episode"
                  />
                </div>
              ))}
            </div>
          </div>

          <h2 className="mb-4 ps-3">New Releases</h2>
          <div className="row g-3 px-3">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="col-6 col-md-3">
                <MusicCard title={""} artist={""} image={""} />
              </div>
            ))}
          </div>
        </main>
      </div>

      <div className="d-md-none">
        <main
          className="bg-black text-light px-4 pt-5 py-9"
          style={{ marginTop: "50px" }}
        >
          <div className="mb-5 px-3">
            <h2 className="mb-3">Novità</h2>
            <hr />
            <p className="text-secondary">Nuova stazione radio</p>
            <Carousel>
              <Carousel.Item>
                <img
                  src="/images/1a.png"
                  className="d-block w-100"
                  alt="Novità"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/images/1b.png"
                  className="d-block w-100"
                  alt="Novità"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/images/1c.png"
                  className="d-block w-100"
                  alt="Novità"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="mb-5 px-3">
            <h4 className="mb-3">Nuovi episodi radio</h4>
            <div className="row g-3">
              {["2a", "2b", "2c", "2d", "2e", "2f"].map((img, index) => (
                <div key={index} className="col-6">
                  <img
                    src={`/images/${img}.png`}
                    className="img-fluid"
                    alt="Radio Episode"
                  />
                </div>
              ))}
            </div>
          </div>

          <h2 className="mb-4 ps-3">New Releases</h2>
          <div className="row g-3 px-3">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="col-6">
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
