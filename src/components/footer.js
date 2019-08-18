import React from 'react';

const Footer = () =>
  <footer class="footer footer-dark">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="footer-column">
            <div class="footer-header">
              <h3>Services</h3>
            </div>
            <ul class="link-list">
              <li>
                <a href="#">Vextor Graphics</a>
              </li>
              <li>
                <a href="#">Business Cards</a>
              </li>
              <li>
                <a href="#">Screen Printing</a>
              </li>
              <li>
                <a href="#">Direct to Garment Printing</a>
              </li>
              <li>
                <a href="#">Digital Fusion</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="column">
            <div class="footer-column">
              <div class="footer-header">
                <h3>Documents</h3>
              </div>
              <ul class="link-list">
                <li>
                  <a href="#">Price List</a>
                </li>
                <li>
                  <a href="#">Suggested Print Locations</a>
                </li>
                <li>
                  <a href="#">Screenprinting Colors</a>
                </li>
                <li>
                  <a href="#">Available Garments</a>
                </li>
              </ul>
            </div>
          </div>
        <div class="column">
          <div class="footer-column">
            <div class="footer-logo">
              <img src={require('../images/logos/logo-knockout.svg')} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

export default Footer;