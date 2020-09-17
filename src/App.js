import React from 'react';
import logo from './logo.svg';
import SideNav from './components/sidenav';
import Main from './pages/index';
import './App.scss';

function App() {
  return (
    <div className="App main">
      <SideNav />
      <Main />
    </div>
  );
}

export default App;
