import React from 'react';
import NavBar from './navbar';
import HeroBody from './hero-body';

const Hero = ({ children }) =>
  <section className="hero is-fullheight is-default is-bold">
    <NavBar />
    <HeroBody />
  </section>

export default Hero;