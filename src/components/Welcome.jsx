import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Home from './Home';
import './welcome.scss';
import Aunthentification from './Aunthentification';
const Welcome = () => {
  return (
    <div className="welcome">
      <div className="buttons">
        <Link to="/home" component={<Home />} style={{ marginRight: '2%' }}>
          <Button value="Home" />
        </Link>
        <Aunthentification />
      </div>
    </div>
  );
};
export default Welcome;
