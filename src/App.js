import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Blog from './containers/Blog';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/blog" component={Blog} />
        </Switch>
        <Footer />

      </div>
    );
  }
}

export default App;
