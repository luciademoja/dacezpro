import React from 'react'
import logo from '../assets/images/logo.png'
import { Link as ScrollLink } from 'react-scroll'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header>
        <h2>DacezPRO®</h2>
        <p>
          Dacezpro è venditore leader su Amazon.
          <br />
          Trovi i prodotti che ami ad un prezzo vantaggioso con il massimo della qualità.
        </p>
      </header>
      <span className="image">
        <img src={logo} alt="intro" />
      </span>
    </div>
    <ScrollLink
      to="assorbenti"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default Banner
