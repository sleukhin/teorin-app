import React from 'react';
import BlogSection from './BlogSection';
import PortfolioSection from './PortfolioSection';
import LandingSection from './LandingSection';
import BannerSection from './BannerSection';
import FormSection from './FormSection';

const MainPage = () => (
  <React.Fragment>
    <BannerSection />
    <PortfolioSection />
    <LandingSection />
    <FormSection />
    <BlogSection />
  </React.Fragment>
);

export default MainPage;
