import React from 'react';
import TopBar from './components/topbar.js';
import Main from './pages/index.js';
import './App.scss';

function App() {
  return (
    <div className="App main">
      <TopBar />
      <Main />
    </div>
  );
}

export default App;
