import * as React from 'react';
import './WhatToLearn.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

const whatToLearn = [
  {
    title: 'Wie ein Computer funktioniert und was Algorithmen sind',
    text: 'Einführung in Compiler, Interpreter und Aufbau eines Computers. ',
    icon: 'fas fa-desktop'
  },
  {
    title: 'Wie man einfache Probleme mit Python löst',
    text: 'Einführung in Syntax und Funktionsweise von Python.',
    icon: 'fab fa-python'
  },
  {
    title: 'Wie man kleine Unittests schreibt, die deinen Code verbessern',
    text: 'Einführung in Unittests und TDD Prinzipien.',
    icon: 'fas fa-vial'
  },
  {
    title: 'Wie die gängigsten Bibliotheken funktionieren und was sie machen.',
    text:
      'Einführung in numpy, matplotlib und scipy anhand von echten Beispielen.',
    icon: 'fas fa-book'
  },
  {
    title:
      'Wie man mit Python oder einer Sprache deiner Wahl, Probleme als Naturwissenschaftler löst',
    text: 'Und Spaß dabei hat!',
    icon: 'fas fa-star'
  }
];

class WhatToLearn extends React.Component {
  render() {
    return (
      <div>
        <h2 style={{ margin: '5rem 0' }}>Was du lernst</h2>
        <div style={styles}>
          {whatToLearn.map(w => (
            <div className="bullet-point" key={w.title}>
              <div style={{ textAlign: 'center' }}>
                <i className={w.icon} />
              </div>
              <div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default WhatToLearn;
