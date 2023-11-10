import React from 'react';
import Header from './Header';
import Setting from './Setting';

function HomePage() {
  return (
    <div>
        <Header />
      <h1 className="m-5">Settings</h1>
      <Setting />

    </div>
  );
}

export default HomePage;