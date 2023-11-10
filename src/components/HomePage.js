import React from 'react';
import Header from './Header';
import Setting from './Setting';
import Graph from './Graph';

function HomePage() {
  return (
    <div>
        <Header />
      <h1 className="m-5">Settings</h1>
      <Setting />
      <Graph />

    </div>
  );
}

export default HomePage;