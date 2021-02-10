import React from 'react';
import Header2 from '../components/layout/Header2';


const LayoutDefault2 = ({ children }) => (
  <React.Fragment>
    <Header2 navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
  </React.Fragment>
);

export default LayoutDefault2;  