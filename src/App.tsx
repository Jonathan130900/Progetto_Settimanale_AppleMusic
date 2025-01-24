import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { fetchNewReleases } from "./store/slices/musicSlice";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import MusicCard from "./components/MusicCard";
import { Carousel } from "react-bootstrap";

const explorationButtons = [
  "Esplora per genere",
  "Worldwide",
  "Video musicali",
  "Decenni",
  "Classifiche",
  "Nuovi artisti",
  "Attività e stati d'animo",
  "Audio spaziale",
  "Hit del passato",
];

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewReleases());
  }, [dispatch]);

  const newReleases = useSelector(
    (state: RootState) => state.music.newReleases
  );
  const loading = useSelector((state: RootState) => state.music.loading);

  return (
    <div className="container-fluid p-0">
      <Header />

      {/* ------ DESKTOP LAYOUT ------ */}
      <div className="d-none d-md-flex">
        <Sidebar />
        <main
          className="flex-grow-1 bg-black text-light px-4 pt-7 py-10"
          style={{ marginLeft: "250px", marginTop: "68px" }}
        >
          {/* Novità */}
          <div className="mb-5 px-3">
            <h2 className="mb-3 mt-4">Novità</h2>
            <hr />
            <Carousel>
              <Carousel.Item>
                <div className="row">
                  <div className="col-6 d-flex flex-column">
                    <h6 className="text-secondary">Nuova stazione radio</h6>
                    <h5>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h5>
                    <img
                      src="/images/1a.png"
                      alt="Novità 1"
                      style={{
                        width: "900px",
                        height: "400px",
                        objectFit: "cover",
                      }}
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-6 d-flex flex-column">
                    <h6 className="text-secondary">Nuova stazione radio</h6>
                    <h5>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h5>
                    <img
                      src="/images/1b.png"
                      alt="Novità 2"
                      style={{
                        width: "900px",
                        height: "400px",
                        objectFit: "cover",
                      }}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="row">
                  <div className="col-6 d-flex flex-column">
                    <h6 className="text-secondary">Nuova stazione radio</h6>
                    <h5>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h5>
                    <img
                      src="/images/1c.png"
                      alt="Novità 3"
                      style={{
                        width: "900px",
                        height: "400px",
                        objectFit: "cover",
                      }}
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-6 d-flex flex-column">
                    <h6 className="text-secondary">Nuova stazione radio</h6>
                    <h5>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h5>
                    <img
                      src="/images/1a.png"
                      alt="Novità 1"
                      style={{
                        width: "900px",
                        height: "400px",
                        objectFit: "cover",
                      }}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="mb-5 px-3">
            <h4 className="mb-3">Nuovi episodi radio</h4>
            <div className="row g-3">
              {["2a", "2b", "2c", "2d", "2e", "2f"]
                .slice(0, 4)
                .map((img, index) => (
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

          <h2 className="mb-4 ps-3">Nuove uscite</h2>
          <div className="row g-3 px-3">
            {loading && <p className="text-center">Loading...</p>}
            {!loading &&
              newReleases.slice(0, 8).map((track) => (
                <div key={track.id} className="col-6 col-md-3">
                  <MusicCard
                    title={track.title}
                    artist={track.artist.name}
                    image={track.album.cover_medium}
                  />
                </div>
              ))}
          </div>

          <div className="mt-5 mb-5 px-3">
            <h4 className="mb-3">Altro da esplorare</h4>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 g-3">
              {explorationButtons.map((label, idx) => (
                <div className="col" key={idx}>
                  <button
                    className="w-100 bg-dark rounded d-flex align-items-center justify-content-between px-4 py-3"
                    style={{
                      color: "firebrick",
                      border: "none",
                    }}
                  >
                    <span>{label}</span>
                    <span style={{ fontSize: "1.25rem" }}>&gt;</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* ------ MOBILE LAYOUT ------ */}
      <div className="d-md-none">
        <main
          className="bg-black text-light px-4 pt-5 py-9 pb-4"
          style={{ marginTop: "50px" }}
        >
          <div className="mb-5 px-3">
            <h2 className="mb-3">Novità</h2>
            <hr />
            <Carousel>
              <Carousel.Item>
                <h6 className="text-secondary">Nuova stazione radio</h6>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h5>
                <img
                  src="/images/1a.png"
                  className="d-block w-100"
                  alt="Novità"
                />
              </Carousel.Item>
              <Carousel.Item>
                <h6 className="text-secondary">Nuova stazione radio</h6>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h5>
                <img
                  src="/images/1b.png"
                  className="d-block w-100"
                  alt="Novità"
                />
              </Carousel.Item>
              <Carousel.Item>
                <h6 className="text-secondary">Nuova stazione radio</h6>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h5>
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
              {["2a", "2b", "2c", "2d", "2e", "2f"]
                .slice(0, 2)
                .map((img, index) => (
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

          <h2 className="mb-4 ps-3">Nuove uscite</h2>
          <div className="row g-3 px-3">
            {loading && <p className="text-center w-100">Loading...</p>}
            {!loading &&
              newReleases.slice(0, 4).map((track) => (
                <div key={track.id} className="col-6">
                  <MusicCard
                    title={track.title}
                    artist={track.artist.name}
                    image={track.album.cover_medium}
                  />
                </div>
              ))}
          </div>

          <div className="mt-5 px-3">
            <h4 className="mb-3">Altro da esplorare</h4>
            <div className="row row-cols-1 g-3 mb-5">
              {explorationButtons.map((label, idx) => (
                <div className="col" key={idx}>
                  <button
                    className="w-100 bg-dark rounded d-flex align-items-center justify-content-between px-4 py-3"
                    style={{
                      color: "firebrick",
                      border: "none",
                    }}
                  >
                    <span>{label}</span>
                    <span style={{ fontSize: "1.25rem" }}>&gt;</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default App;
