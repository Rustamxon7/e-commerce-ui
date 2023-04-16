import React from 'react';
import { TopBar, TopNavBar, TopSearchBar } from '../../utilities/Nav';
import MainSlider from './MainSlider';
import PopularProducts from './PopularProducts';
import AddCard from './AddCard';
import AddProductsSlider from './AddProductsSlider';
import Features from './Features';
import Testimonials from './Testimonials';
import CompanyLogoSlider from './CompanyLogoSlider';
import LatestNews from './LatestNews';
import Footer from '../../utilities/Footer';

const Home = () => {
  return (
    <div className='container'>
      <TopBar />
      <TopSearchBar />
      <TopNavBar />

      <div className='content'>
        <MainSlider />
        <PopularProducts />
        <AddCard />
        <AddProductsSlider />
        <Features />
        <Testimonials />
        <CompanyLogoSlider />
        <LatestNews />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
