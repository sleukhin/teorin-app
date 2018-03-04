import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Blog from './containers/Blog';
import Header from './components/Header';
import BlogItemDetail from './components/BlogItems/BlogItemDetail';
class App extends Component {
  render() {
    const { location } = this.props;

    return (
      <div className="App">
        <Header />
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <div>
              <Switch location={location}>
                <Route exact path="/blog" component={Blog} />
                <Route path="/blog/:id" component={BlogItemDetail} />
                <Route path="/" component={MainPage} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
