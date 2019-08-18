import React from "react"
// import { Link } from "gatsby"

import Hero from '../components/hero';
import Footer from '../components/footer';
import SEO from "../components/seo"
import '../sass/style.sass';

const tiles = [
  {
    title: 'Contact Form',
    text: 'Let us know what you want using our quick contact form. Fill it out and get a quick quote right away.',
    left: true,
  },
  {
    title: 'Quote',
    text: 'We will email you an exact quote to include sales tax and shipping costs. We may also reach out about artwork specifics to ensure you get exactly what you want.',
    left: false,
  },
  {
    title: 'Artwork',
    text: 'You can use your own vector artwork or we can create a logo based on an image or description. Either way, we will send you a proof for approval before we move onto production.',
    left: true,
  },
  {
    title: 'Production & Shipping',
    text: 'After artwork is approved, you\'re good to go.You don\'t need to do anything else. We will push your order to production and ship it out to you. You can expect your order in about two weeks.',
    left: false,
  }
];

const renderTitle = title =>
  <h4 class="subtitle is-three is-capitalized has-text-weight-bold">{title}</h4>

const renderText = text =>
  <p class="has-text-grey">{text}</p>

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <section class="section section-feature-grey">
      <div class="container">
        <h2 class="title has-text-dark is-2">How It Works</h2>
        <div class="divider is-hidden-mobile" />
      </div>

      <div class="content-wrapper">
        {
          tiles.map(t => (
            <>
              <div class="columns">
              {t.left && <div class="column is-one-third" />}
              <div class={`column is-two-third ${t.left !== true && 'has-text-right'}`}>
                {renderTitle(t.title)}
                {renderText(t.text)}
              </div>
              {t.left !== true && <div class="column is-one-third" />}
              </div>
            </>
          ))
        }
      </div>
    </section>
    <Footer />
  </>
)

export default IndexPage
