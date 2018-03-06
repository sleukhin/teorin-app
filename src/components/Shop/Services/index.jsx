import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import Service from './Service';

class Services extends Component {
  componentDidMount() {
    this.props.initServices();
  }

  handleClick = id => {
    this.props.addToCart(this.props.services.find(item => item.id === id));
  }

  render() {
    const { services } = this.props;

    return (
      <div>
        <h1>Services</h1>
        {services.map(service => (
          <Service
            key={service.id}
            service={service}
            onClick={() => {
              this.handleClick(service.id);
            }}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    services: state.servicesReducer.services
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initServices: () => dispatch(actions.initServices()),
    addToCart: item => dispatch(actions.addToCart(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
