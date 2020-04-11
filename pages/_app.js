import React from 'react';
import '../styles/styles.css';

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
      <h1>App</h1>
    </div>
  );
};

export default App;
