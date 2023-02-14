import React from 'react';
import { SubHeading } from '../../components';

import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrappper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Gain Useful Insights"/>
        <h1 className="app__header-h1">THE KEY TO GAIN PROFITS</h1>
        
        <p className="p__opensans" style={{margin: '2rem 0'}}>Easily understand how to evaluate various types of stock market patterns. Some of the patterns we provide for analysis are triangle pattern, wedge pattern etc. </p>
        <button type="button" className="custom__button">Explore Features</button>
        </div>
        <div className="app__wrapper_img">

          <img src={images.stock1} alt="header img" />

        </div>
  </div>
);

export default Header;
