import React from 'react';

const HeroBody = () =>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-5 is-offset-1 is-hidden-mobile">
          <figure class="image is-4by3">
            <img src={require('../images/illustrations/worker.svg')} alt="" />
          </figure>
        </div>
        <div class="column is-5 is-offset-1 landing-caption">
          <h1 class="title is-1 is-bold is-spaced has-text-centered-mobile has-text-right-desktop has-text-dark">What We Do?</h1>
          <div class="divider is-pulled-right is-hidden-mobile"></div>
          <h2 class="subtitle is-5 is-muted has-text-left-mobile has-text-right-desktop">
            We bring custom graphics to small businesses and events for afforadble prices. We also offer several print options from business cards to custom apparell to get your companies message to the masses.
          </h2>
        </div>
      </div> 
    </div>
  </div>

export default HeroBody;