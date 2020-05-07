import React from 'react'
import dolceSogno2 from '../assets/images/corredini/dolceSogno2.jpeg'
import Fade from 'react-reveal/Fade'

const DolceSognoBanner = props => (
  <section
    id="corredini"
    className="spotlight style2 right inactive"
    style={{ backgroundImage: `url(${dolceSogno2})`, backgroundSize: 'contain' }}
  >
    <span className="image fit main">
      <img src={dolceSogno2} alt="" />
    </span>
    <Fade right big>
      <div className="content">
        <header>
          <h2>Dolce Sogno</h2>
          <p>NOVITÀ 2020!</p>
        </header>
        <p>
          Cara Mamma,
        </p>
        <p>
          in questa Dolce Attesa siamo al tuo fianco per aiutarti a preparare la valigia da portare in
          ospedale. Grazie alle nostre bustine corredino avrai modo di organizzare in maniera pratica e ordinata tutto
          ciò che ti viene indicato nella lista corredino. All'interno della scatola troverai il nostro piccolo
          promemoria.
        </p>
        <p>
          Non dimenticare di portare con te il nostro bavaglino, desideriamo far parte dei tuoi ricordi!
          Auguri di Cuore! Sarai una mamma meravigliosa!
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
  </section>
)

export default DolceSognoBanner
