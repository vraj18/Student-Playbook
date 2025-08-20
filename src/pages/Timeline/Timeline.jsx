import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Timeline.css';

const Timeline = () => {
  const events = [
    
    {
      id: 3,
      date: '07th September 2025',
      title: 'Cultnite',
      description: 'Welcome event for new students with performances and introductions.'
    },
    
    {
      id: 4,
      date: '15th September 2025',
      title: 'Convocation',
      description: 'Annual convocation ceremony for graduating students.'
    },
    {
      id: 5,
      date: '1st Oct - 10th Oct 2025',
      title: 'Mid Semester Examinations',
      description: 'First major exams of the semester - prepare well!'
    },
    
    {
      id: 6,
      date: '20th October 2025',
      title: 'Diwali (Holiday)',
      description: 'Festival of lights holiday break.'
    },
    {
      id: 7,
      date: '2nd November 2025',
      title: 'Freshers Event',
      description: 'Set of events and performances for freshers.'
    },

    {
      id: 8,
      date: '07th - 9th November 2025',
      title: 'Aarohi-25',
      description: 'The Official Cultural festival of VNIT Nagpur.'
    },
    {
      id: 9,
      date: '14th - 16th November 2025',
      title: 'Department Gathering',
      description: 'Department-specific events and networking opportunities.'
    },
    {
      id: 10,
      date: '26th Nov - 04th Dec 2025',
      title: 'End Semester Examinations',
      description: 'Final exams for the semester - study hard!'
    },
    {
      id: 11,
      date: '25th December 2025',
      title: 'Winter Holiday',
      description: 'Winter holiday break.'
    }
    
  ];

  return (
    <div className="timeline-page">
      <section className="timeline-section">
        <div className="container">
          <SectionTitle 
            title="Academic Calendar 2025-26" 
            subtitle="Major Events and Holidays" 
          />
          <div className="timeline-container">
            {events.map((event, index) => (
              <div 
                key={event.id} 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                data-aos="fade-up"
              >
                <div className="timeline-date">{event.date}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="calendar-download">
            <a 
              href="/calendar.pdf" 
              download="VNIT_Academic_Calendar_2025.pdf"
              className="download-button"
            >
              Download Full Academic Calendar (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;