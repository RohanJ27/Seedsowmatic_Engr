import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Graph from './Graph';
import Settings from './Settings';
import About from './About';

function HomePage() {

  return (
    <div>
        <Header />

        <h1 className='m-5'>System</h1>
        <div>
            
            <Settings/>
            
        </div>
        
    </div>
  );
}

export default HomePage;