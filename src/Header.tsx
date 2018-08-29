import * as React from 'react';

import './Header.css';

const Header = () => (
  <div
    style={{
      fontFamily: 'sans-serif',
      textAlign: 'center',
      position: 'relative',
      height: '60vh',
      width: '100vw',
      backgroundColor: '#263238'
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#eee',
        opacity: 0.9
      }}
    >
      <h1 id="headline" style={{ whiteSpace: 'nowrap' }}>
        Coding with PhysikOnline
      </h1>
      <p>Real Peer-To-Peer Teaching</p>
    </div>
  </div>
);

export default Header;
