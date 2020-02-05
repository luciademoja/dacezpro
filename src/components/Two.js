import React from 'react'
import dolceSogno7 from '../assets/images/corredini/dolceSogno7.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Two = props => (
  <section
    id="corredini"
    className="spotlight style2 right inactive"
    style={{ backgroundImage: `url(${dolceSogno7})` }}
  >
    <span className="image fit main">
      <img src={dolceSogno7} alt="" />
    </span>
    <Fade right big>
      <div className="content">
        <header>
          <h2>Dolce Sogno</h2>
          <p>NOVITÀ 2020!</p>
        </header>
        <p>
          Acquista un corredino Dolce Sogno DacezPRO® e ottieni un bavaglino in regalo! 🎁
        </p>
        <p>
          Il nostro disegno fatto a mano è stato ideato pensando a questa dolce attesa
          rappresentata come una soffice nuvola che culla il vostro bambino in un dolce sogno abbracciato dal
          sole. La superficie della scatola presenta una piacevole finitura soft touch, che dona un effetto
          morbido e vellutato estremamente gradevole al tatto.
        </p>
        <p>Garanzia 'Soddisfatti o Rimborsati'!</p>
        <ul className="actions">
          <li>
            <a href="/corredini" className="button">
              Leggi di più
            </a>
          </li>
        </ul>
      </div>
    </Fade>
    <ScrollLink
      to="contatti"
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

export default Two
