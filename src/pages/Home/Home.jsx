import React, { useState } from "react";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Home.css";

const Home = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/aarohi_vnitnagpur/", "_blank");
  };

  const [flippedCards, setFlippedCards] = useState([]);

  const toggleCardFlip = (index) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter((i) => i !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section with Particles */}
      <section className="hero-section">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#FF8C00", // Changed from #ffd700 to orange
              },
              links: {
                value: "#FF8C00", // Changed from #ffd700 to orange
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 60,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
          className="particles"
        />

        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to{" "}
            <span>
              <h1>VNIT NAGPUR</h1>
            </span>
          </h1>
          <p className="hero-subtitle">The Fresher's Guide From Aarohi'25</p>
          
          <div className="hero-buttons">
            <button onClick={openInstagram} className="hero-button primary">
              Visit our Social Media
            </button>
            <Link to="/timeline" className="hero-button secondary ">
              Event Timeline
            </Link>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <SectionTitle
            title="About VNIT Nagpur"
            subtitle="Premier technical institute in central India"
          />
          <div className="about-content">
            <div className="about-text">
              <p>
                Visvesvaraya National Institute of Technology Nagpur (VNIT
                Nagpur) is a premier public technical university established in
                1960. Originally established as Visvesvaraya Regional College of
                Engineering, it was later granted NIT status.
              </p>
              <p>
                The institute is named after the eminent engineer Sir M.
                Visvesvaraya and is recognized as an Institute of National
                Importance. It offers undergraduate, postgraduate and doctoral
                programs in various engineering and science disciplines.
              </p>
              <p>
                The 215-acre campus features state-of-the-art academic
                facilities, research centers, hostels, and sports complexes.
                VNIT Nagpur consistently ranks among the top engineering
                colleges in India.
              </p>
            </div>
            <div className="about-image">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a8/VNIT_Nagpur_main.jpg"
                alt="VNIT Nagpur"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Aarohi Section */}
      <section className="aarohi-section">
        <div className="container">
          <SectionTitle
            title="About Aarohi"
            subtitle="Central India's Largest Cultural Fest"
          />

          <div className="aarohi-description">
            <p>
              Aarohi is the official annual cultural fest of VNIT Nagpur,
              celebrated as Central India’s largest three-day student-run
              festival since 1989. It hosts a vibrant blend of cultural,
              technical, and literary events, along with crowd-pulling informal
              attractions and two grand pro-shows featuring renowned artists and
              performers. With competitions like A La Danse, Purple Haze, and
              Hunkar, Aarohi not only showcases talent but also fosters
              creativity, collaboration, and community, making it a defining
              experience for students and visitors alike.
            </p>
          </div>

          {/* Infinite Scrolling Gallery */}
          <div className="aarohi-gallery-container">
            <div className="aarohi-gallery">
              <div className="aarohi-gallery-track">
                {/* First set of images */}
                {[1, 2, 3, 4, 5, 6].map((num, index) => (
                  <div key={`first-${index}`} className="aarohi-gallery-item">
                    <img
                      src={`/gallery/${num}.png`}
                      alt={`Aarohi event ${num}`}
                    />
                    <div className="gallery-item-overlay"></div>
                  </div>
                ))}

                {/* Duplicate for infinite effect */}
                {[1, 2, 3, 4, 5, 6].map((num, index) => (
                  <div key={`second-${index}`} className="aarohi-gallery-item">
                    <img
                      src={`/gallery/${num}.png`}
                      alt={`Aarohi event duplicate ${num}`}
                    />
                    <div className="gallery-item-overlay"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // Major Events Section */}
      <section className="major-events-section">
        <div className="container">
          <SectionTitle
            title="Major Events"
            subtitle="Key events during your VNIT journey"
          />
          <div className="events-grid">
            {/* DG Card */}
            <div
              className={`event-card ${
                flippedCards.includes(0) ? "flipped" : ""
              }`}
              onClick={() => toggleCardFlip(0)}
            >
              <div className="event-card-inner">
                <div className="event-card-front">
                  <div className="event-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3>Departmental Gathering</h3>
                  <p>Celebrate your department spirit</p>
                </div>
                <div className="event-card-back">
                  <h3>Departmental Gathering</h3>
                  <div className="event-date">August - September</div>
                  <p>
                    A 3-day celebration where the entire department unites to
                    bond and showcase spirit.
                  </p>
                </div>
              </div>
            </div>

            {/* IG Card */}
            <div
              className={`event-card ${
                flippedCards.includes(1) ? "flipped" : ""
              }`}
              onClick={() => toggleCardFlip(1)}
            >
              <div className="event-card-inner">
                <div className="event-card-front">
                  <div className="event-icon">
                    <i className="fas fa-university"></i>
                  </div>
                  <h3>Institute Gathering</h3>
                  <p>Whole college comes together</p>
                </div>
                <div className="event-card-back">
                  <h3>Institute Gathering</h3>
                  <div className="event-date">January-February</div>
                  <p>
                    A grand 10-day extravaganza where all departments compete
                    for the coveted IG Trophy.
                  </p>
                </div>
              </div>
            </div>

            {/* Aarohi Card */}
            <div
              className={`event-card ${
                flippedCards.includes(2) ? "flipped" : ""
              }`}
              onClick={() => toggleCardFlip(2)}
            >
              <div className="event-card-inner">
                <div className="event-card-front">
                  <div className="event-icon">
                    <i className="fas fa-music"></i>
                  </div>
                  <h3>Aarohi</h3>
                  <p>The Official Cultural Fest</p>
                </div>
                <div className="event-card-back">
                  <h3>Aarohi</h3>
                  <div className="event-date">November</div>
                  <p>
                    The official cultural fest spanning 3 days with cultural,
                    technical, and literary events, fun activities, and
                    pro-shows featuring renowned artists and performers.
                  </p>
                </div>
              </div>
            </div>

            {/* Axis Card */}
            <div
              className={`event-card ${
                flippedCards.includes(3) ? "flipped" : ""
              }`}
              onClick={() => toggleCardFlip(3)}
            >
              <div className="event-card-inner">
                <div className="event-card-front">
                  <div className="event-icon">
                    <i className="fas fa-robot"></i>
                  </div>
                  <h3>Axis</h3>
                  <p>Technical Festival</p>
                </div>
                <div className="event-card-back">
                  <h3>Axis</h3>
                  <div className="event-date">March</div>
                  <p>
                    VNIT's annual technical festival filled with technical
                    competitions, workshops, exhibitions, and guest lectures
                    that showcase innovation and cutting-edge ideas.
                  </p>
                </div>
              </div>
            </div>

            {/* Consortium (E-Cell) Card */}
            <div
              className={`event-card ${
                flippedCards.includes(4) ? "flipped" : ""
              }`}
              onClick={() => toggleCardFlip(4)}
            >
              <div className="event-card-inner">
                <div className="event-card-front">
                  <div className="event-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h3>Consortium (E-Cell)</h3>
                  <p>Entrepreneurship Festival</p>
                </div>
                <div className="event-card-back">
                  <h3>Consortium (E-Cell)</h3>
                  <div className="event-date">February</div>
                  <p>
                    The flagship entrepreneurship fest with startup showcases,
                    pitch battles, workshops, and events that celebrate
                    innovation, leadership, and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
