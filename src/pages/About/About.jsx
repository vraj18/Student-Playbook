import React from "react";
import "./About.css";

const About = () => {
  const events = [
    {
      name: "Ascension",
      description:
        "The ultimate gaming showdown where players battle for supremacy in popular esports titles. Join us for intense competition, pro-level gameplay, and exciting prizes!",
    },
    {
      name: "Purple Haze",
      description:
        "A high-voltage rock music extravaganza celebrating the spirit of rock and roll. Experience electrifying performances by talented bands and solo artists in this unforgettable musical journey.",
    },
    {
      name: "Swaranzar",
      description:
        "The premier singing competition that discovers the finest vocal talents. Participants showcase their musical prowess across genres, battling for the coveted title of best singer.",
    },
    {
      name: "Hunkar",
      description:
        "A powerful street play competition that amplifies social messages through dramatic performances. Teams use minimal props and maximum passion to convey thought-provoking narratives.",
    },
    {
      name: "Abhivyakti",
      description:
        "The prestigious stage play competition where theatrical talents bring compelling stories to life. Witness outstanding acting, direction, and production values in these dramatic performances.",
    },
    {
      name: "Cynosure",
      description:
        "The ultimate personality contest that tests charm, wit, and stage presence. Participants go through multiple rounds showcasing their communication skills, confidence, and overall personality.",
    },
    {
      name: "Big Fight",
      description:
        "A heated debate competition where quick thinking meets eloquence. Speakers battle it out on controversial topics, defending their positions with logic, facts, and persuasive arguments.",
    },
    {
      name: "Madhur Antakshari",
      description:
        "A nostalgic Bollywood musical quiz that tests your knowledge of Hindi film songs. Teams compete in this fun-filled musical battle, singing verses back and forth in classic antakshari style.",
    },
    {
      name: "Ala Dance",
      description:
        "The most anticipated dance competition featuring breathtaking performances across styles. From classical to contemporary, solo to group acts, witness the magic of movement and rhythm.",
    },
    {
      name: "Rythm Divine",
      description:
        "A celebration of instrumental music where talented musicians showcase their mastery over various instruments. Experience mesmerizing melodies and complex compositions in this auditory delight.",
    },
  ];

  return (
    <section className="about-us-section">
      <div className="about-container">
        {/* Aarohi-25 Section */}
        <div className="section-block">
          <h3 className="section-title">Aarohi-25</h3>
          <div className="section-content">
            <p>
              Aarohi-25 is the official cultural event of our institution,
              dedicated to fostering innovation and technical excellence among
              students.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="vision-mission-grid">
          <div className="vision-mission-card">
            <i className="fas fa-eye"></i>
            <h4>Our Vision</h4>
            <p>
              Aarohi-25 aspires to be a transformative cultural-technical
              festival that unleashes creativity, celebrates diverse talents,
              and bridges innovation with artistic expression, empowering
              students to become visionary leaders of tomorrow.
            </p>
          </div>
          <div className="vision-mission-card">
            <i className="fas fa-bullseye"></i>
            <h4>Our Mission</h4>
            <p>
              Aarohi-25 is dedicated to fostering holistic growth by providing a
              vibrant platform for competitive and collaborative excellence in
              gaming, music, theater, and debate while nurturing technical
              prowess and cultural pride.
            </p>
          </div>
        </div>

        {/* Events Section */}
        <div className="section-block">
          <h3 className="section-title">Events We Conduct</h3>
          <div className="events-grid">
            {events.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h4>{event.name}</h4>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
