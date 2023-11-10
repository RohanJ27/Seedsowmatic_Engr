import React from 'react';
import Header from './Header';
import Graph from './Graph';
import Settings from './Settings';
import About from './About';

function HomePage() {
  return (
    <div>
        <Header />
        
        <h1 className="m-5">Settings</h1>
        <div className="d-flex justify-content-between m-5">
            
            <Settings />
            <Graph />
            
        </div>
        
    </div>
  );
}

export default HomePage;