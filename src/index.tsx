import * as React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';
import './styles.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

const App = () => (
  <div style={styles}>
    <Header />
    <MainSection />
    <Footer />
  </div>
);

render(<App />, document.getElementById('root'));
