// src/pages/_app.js
import React from 'react';
import '../styles/globals.css'; // Adjust the path if necessary

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
