import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Graph from './Graph';
import Settings from './Settings';
import About from './About';

function HomePage() {
    const [isPlanting, setIsPlanting] = useState(false);

  return (
    <div>
        <Header />

        <h1 className='m-5'>System</h1>
        <div className="d-flex justify-content-between m-5">
            
            <Settings setIsPlanting={setIsPlanting}/>
            <Graph isPlanting={isPlanting} setIsPlanting={setIsPlanting}/>
            
        </div>
        
    </div>
  );
}

export default HomePage;