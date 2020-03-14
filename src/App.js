import React from 'react';
import './scss/base.scss';

function App() {
  return (
    <div className="App" data-test="component-app">
      <header className="header">
        <a
          data-test="component-logo"
          className="header--logo"
          href="http://akds.tech"
        >
          akds.tech
        </a>
      </header>
    </div>
  );
}

export default App;
