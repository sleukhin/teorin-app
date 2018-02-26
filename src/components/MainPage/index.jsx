import React from 'react';
import BlogSection from './BlogSection';
import Portfolio from '../../components/Portfolio';
import LandingSection from './LandingSection';
import Form from './Form';

const MainPage = () => (
  <React.Fragment>
    <Portfolio />
    <LandingSection />
    <Form />
    <BlogSection />
  </React.Fragment>
);

export default MainPage;
