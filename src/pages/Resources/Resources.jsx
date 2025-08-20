import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Resources.css';

const Resources = () => {
  const semesterMaterials = [
    {
      id: 'sem1',
      title: 'Physics Semester Materials',
      description: 'Complete study materials for Physics Semester',
      link: 'https://drive.google.com/drive/folders/1SYImd0dHgWIQoiM6DEReVe3T1-y4R8yu',
      icon: 'fas fa-book'
    },
    {
      id: 'sem2',
      title: 'Chemistry Semester Materials',
      description: 'Complete study materials for Chemistry Semester',
      link: 'https://drive.google.com/drive/folders/1wZQtdf2HTH1k2iwfa_p0KIaa6sbrGWJS',
      icon: 'fas fa-book'
    },
    {
      id: 'Architecture',
      title: 'Architecture Semester Materials',
      description: 'Complete study materials for Architecture Students',
      link: 'https://drive.google.com/drive/folders/1Xijxhunl3JzQLwXI7XSsrCiH6T47lYbV?usp=sharing',
      icon: 'fas fa-book'
    }
  ];

  const youtubeChannels = [
    {
      id: 'neso',
      name: 'Neso Academy',
      description: 'Excellent tutorials for engineering subjects',
      link: 'https://www.youtube.com/c/nesoacademy',
      icon: 'fab fa-youtube'
    },
    {
      id: 'ticklet',
      name: 'Tickle Academy',
      description: 'Great for mathematics and programming',
      link: 'https://www.youtube.com/c/TickleAcademy',
      icon: 'fab fa-youtube'
    },
    {
      id: 'gate',
      name: 'Gate Smashers',
      description: 'Concise explanations of important concepts',
      link: 'https://www.youtube.com/c/GateSmashers',
      icon: 'fab fa-youtube'
    },
    {
      id: 'mit',
      name: 'MIT OpenCourseWare',
      description: 'Official MIT course materials',
      link: 'https://www.youtube.com/c/mitocw',
      icon: 'fab fa-youtube'
    }
  ];

  return (
    <div className="resources-page">
      <section className="resources-section">
        <div className="container">
          <SectionTitle 
            title="First Year Resources" 
            subtitle="All study materials for first year engineering students" 
          />
          
          <div className="semester-materials">
            <h2>Semester Materials</h2>
            <div className="materials-grid">
              {semesterMaterials.map(material => (
                <div key={material.id} className="material-card">
                  <div className="material-icon">
                    <i className={material.icon}></i>
                  </div>
                  <div className="material-content">
                    <h3>{material.title}</h3>
                    <p>{material.description}</p>
                    <a 
                      href={material.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="material-link"
                    >
                      Access Materials <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="youtube-channels">
            <h2>Recommended YouTube Channels</h2>
            <div className="channels-grid">
              {youtubeChannels.map(channel => (
                <div key={channel.id} className="channel-card">
                  <div className="channel-icon">
                    <i className={channel.icon}></i>
                  </div>
                  <div className="channel-content">
                    <h3>{channel.name}</h3>
                    <p>{channel.description}</p>
                    <a 
                      href={channel.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="channel-link"
                    >
                      Visit Channel <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;