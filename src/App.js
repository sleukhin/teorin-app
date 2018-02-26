import React, { Component } from 'react';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainPage />
        <Footer />
      </div>
    );
  }
}

export default App;
