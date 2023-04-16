import React from 'react';
import { TopBar, TopNavBar, TopSearchBar } from '../../utilities/Nav';

const Home = () => {
  return (
    <div className='container'>
      <TopBar />
      <TopNavBar />
      <TopSearchBar />
    </div>
  );
};

export default Home;
