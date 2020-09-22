import React from 'react';
import logo from './logo.svg';
import TopBar from './components/topbar';
import Main from './pages/index';
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
