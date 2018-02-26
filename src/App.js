import React, { Component } from 'react';
import Header from './components/Header';
import Portfolio from './containers/Portfolio';
import LandingSection from './components/UI/LandingSection';
import Form from './components/Form';
import Blog from './containers/Blog';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Portfolio />
        <LandingSection />
        <Form />
        <Blog />
        <Footer />
      </div>
    );
  }
}

export default App;
