import React from 'react';
import './App.css';

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <MainContent/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
