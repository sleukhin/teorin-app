import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Blog from './containers/Blog';
import Header from './components/Header';

class App extends Component {
  render() {
    const { location } = this.props;

    return (
      <div className="App">
        <Header />

        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Switch location={location}>
              <Route exact path="/" component={MainPage} />
              <Route path="/blog" component={Blog} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />

      </div>
    );
  }
}

export default withRouter(App);
