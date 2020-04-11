import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.css';

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <div className='min-h-screen container mx-auto'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
