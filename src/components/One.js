import React from 'react'
import assorbenti6 from '../assets/images/assorbenti/assorbenti6.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const One = props => (
  <section
    id="assorbenti"
    className="spotlight style1 bottom inactive"
    style={{ backgroundImage: `url(${assorbenti6})` }}
  >
    <Fade bottom big>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-medium">
              <header>
                <h2>Assorbenti Ascellari Uomo/Donna (Unisex)</h2>
                <ul className="actions">
                  <li>
                    <a href="/assorbenti-ascellari" className="button">
                      Leggi di più
                    </a>
                  </li>
                </ul>
              </header>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                Concepiti per garantire a chi ha problemi di eccessiva sudorazione o ipersudorazione ascelle una
                sensazione di benessere in qualsiasi momento della giornata.
              </p>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                Grazie all'utilizzo di materiali italiani certificati, i nostri assorbenti non provocano alcun
                fastidio o pizzicore sotto l'ascella o sulla pelle, dandoti così una sicurezza completa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
    <ScrollLink
      to="corredini"
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
export default One
