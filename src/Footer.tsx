import * as React from 'react';
import './Footer.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  left: 0,
  right: 0,
  bottom: 0,
  padding: '1rem',
  backgroundColor: '#263238',
  color: 'white'
};

const Footer = () => (
  <footer style={styles}>
    Made with <i id="heart" className="fas fa-heart" /> by PhysikOnline
  </footer>
);

export default Footer;
