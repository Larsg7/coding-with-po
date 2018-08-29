import * as React from 'react';

import './Instructors.css';

interface Instructor {
  name: string;
  picture: string;
  url: string;
  text: string;
}

const instructors: Instructor[] = [
  {
    name: 'Lars Gröber',
    url: '',
    picture: '/images/profile_lars.jpg',
    text: 'Something about me'
  },
  {
    name: 'Keiwan Jamaly',
    url: '',
    picture: '/images/profile_keiwan.jpg',
    text: 'Something about me'
  }
];

const Instructors = () => (
  <div>
    <h2 style={{ margin: '5rem 0' }}>Deine Dozenten</h2>
    <div className="instructor-wrapper">
      {instructors.map(i => (
        <div className="instructor" key={i.name}>
          <img src={i.picture} />
          <h3 style={{ marginBottom: '0.5rem' }}>{i.name}</h3>
          <div>{i.text}</div>
          <a href={i.url}>
            <i className="fas fa-link" />
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Instructors;
