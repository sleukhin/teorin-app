import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import Service from './Service';

class Services extends Component {
  componentDidMount() {
    this.props.initServices();
  }

  render() {
    const { services } = this.props;

    return (
      <div>
        <h1>Services</h1>
        {services.map(service => (
          <Service key={service.id} service={service} />
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
    initServices: () => dispatch(actions.initServices())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
