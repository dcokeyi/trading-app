import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/bullsfirst-logo.svg';
import popsicle from '../../assets/popsicle.png';
import { Button } from '../../components/Button/Button';
import { HorizontalContainer } from '../../components';
import './Hero.css';

export const Hero = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/signin');
  };
  return (
    <div className="bg-neutral-light py-4">
      <div className="hero_container container">
        <HorizontalContainer className="justify-between items-center">
          <img src={logo} alt="logo" width="190" className="hero__logo" />
          <img
            src={popsicle}
            alt="popsicle"
            height="200px"
            className="hero__popscicle"
          />
          <Button
            rootClass="btn-primary mt-2"
            label="Sign In"
            title="Sign In"
            handleClick={handleClick}
          />
        </HorizontalContainer>
        <p className="hero__slogan">
          Get better results with Bullsfirst at the helm of your portfolio
        </p>
      </div>
    </div>
  );
};
