import React from 'react';
import Button from '../../../UI/Button';

const Service = ({ service }) => (
  <div>
    <h3>{service.title}</h3>
    <p>{service.desc}</p>
    <Button btnType="accentSmall">Add to Cart</Button>
  </div>
);

export default Service;
