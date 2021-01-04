import React from 'react';
import Header from '../components/layout/Header';


const LayoutDefault = ({ children }) => (
  <React.Fragment>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
  </React.Fragment>
);

export default LayoutDefault;  