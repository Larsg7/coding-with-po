import * as React from 'react';

import './Instructors.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

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
    picture: '',
    text: 'test'
  },
  {
    name: 'Lars Gröber',
    url: '',
    picture: '',
    text: 'test'
  }
];

const Instructors = () => (
  <div>
    <h3 style={{marginBottom: '2rem'}}>Deine Dozenten</h3>
    <div className="instructor-wrapper">
      {instructors.map(i => (
        <div className="instructor">
          <img src={i.picture} />
          <h3>{i.name}</h3>
          <p>{i.text}</p>
        </div>
      ))}
    </div>
  </>
);

export default Instructors;
