import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import dolceSogno1 from '../assets/images/dolceSogno1.jpg'
import dolceSogno2 from '../assets/images/dolceSogno2.jpeg'

const Corredini = props => (
  <Layout>
    <Helmet>
      <title>Dolce Sogno - DacezPRO®</title>
      <meta name="description" content="Dolce Sogno DacezPRO®" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Dolce Sogno</h2>
          <p>
            8 Bustine Corredino Neonato Ospedale NOVITA' 2020
          </p>
        </header>
        <div className="row gtr-150">
          <div className="col-4 col-12-medium">
            <section id="sidebar">
              <section>
                <h3>MADE IN ITALY</h3>
                <p>
                  Sacchetti Trasparenti 27x37 30x40 30x45
                </p>
                <footer>
                  <ul className="actions">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.amazon.it/DacezPRO%C2%AE-Corredino-Trasparenti-Sacchetti-BAVAGLINO/dp/B0813Y6GGZ/ref=sr_1_2?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&fbclid=IwAR1ob7WVUNDT7QQMoEnp6RmUDYpfYQZCj8tYgUShWtnd87Zp9XvQQkTQ2eI&keywords=bustine+corredino+neonato+ospedale+dolce+sogno&qid=1580225498&sr=8-2"
                        className="button"
                      >
                        Compra su Amazon
                      </a>
                    </li>
                  </ul>
                </footer>
              </section>
              <hr />
              <section>
                <a href="#" className="image fit">
                  <img src={dolceSogno2} alt="" />
                </a>
                <h3>19,90 € Spedizione GRATUITA sul tuo primo ordine idoneo.</h3>
                <p>
                  ✅ GARANZIA ✅ Certi della qualità del nostro prodotto, offriamo la garanzia 'Soddisfatti o
                  Rimborsati': resi veloci e rimborsi gratuiti, entro 30 giorni dalla data d'acquisto.
                  Contattaci per ulteriori informazioni.
                </p>
                <footer>
                  <ul className="actions">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.amazon.it/DacezPRO%C2%AE-Corredino-Trasparenti-Sacchetti-BAVAGLINO/dp/B0813Y6GGZ/ref=sr_1_2?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&fbclid=IwAR1ob7WVUNDT7QQMoEnp6RmUDYpfYQZCj8tYgUShWtnd87Zp9XvQQkTQ2eI&keywords=bustine+corredino+neonato+ospedale+dolce+sogno&qid=1580225498&sr=8-2"
                        className="button"
                      >
                        Acquista subito!
                      </a>
                    </li>
                  </ul>
                </footer>
              </section>
            </section>
          </div>
          <div className="col-8 col-12-medium imp-medium">
            <section id="content">
              <a href="#" className="image fit">
                <img src={dolceSogno1} alt="" />
              </a>
              <h3>✅ 3 MISURE PIU’ SPAZIO ✅</h3>
              <p>
                Ti offriamo tutto lo spazio necessario per contenere gli indumenti del tuo
                bambino in tre misure: 5 buste 27x37 cm, 2 buste 30x40 cm, 1 busta 30x45cm. Le nostre buste a chiusura
                ermetica con cursore proteggono il loro contenuto e garantiscono una protezione totale dalle
                contaminazioni esterne; potrai riutilizzarle in futuro per organizzare i cambi da portare in asilo,il
                cambio armadio, la valigia per un viaggio o come porta pannolini.
              </p>
              <h3>🎁BAVAGLINO 🎁</h3>
              <p>
                In regalo per te, uno degli accessori indispensabili alla nascita e per i primi anni
                di asilo, 100% in puro cotone, lavabile in lavatrice a 40°C , prodotto in Italia e certificato CE.
              </p>
              <h3>♻️ SCATOLA REGALO RIUTILIZZABILE☀</h3>
              <p>
                L’abbiamo creata con amore avendo la massima cura dei dettagli ed è
                riutilizzabile. Il nostro disegno fatto a mano è stato ideato pensando a questa dolce attesa
                rappresentata come una soffice nuvola che culla il vostro bambino in un dolce sogno abbracciato dal
                sole. La superficie della scatola presenta una piacevole finitura soft touch, che dona un effetto
                morbido e vellutato estremamente gradevole al tatto.
              </p>
              <h3>🇮🇹 MADE IN ITALY 🇮🇹</h3>
              <p>
                Dolce Sogno è stato realizzato con amore in Italia, avendo cura di ogni
                dettaglio, dal disegno fatto a mano da una giovane mamma, alla scelta dei migliori materiali e
                produttori italiani. Tutto è stato curato nei minimi particolari sino al confezionamento a mano.
                Offrire qualità è la nostra priorità.
              </p>
              <h3>✅ GARANZIA ✅</h3>
              <p>
                Certi della qualità del nostro prodotto, offriamo la garanzia 'Soddisfatti o
                Rimborsati': resi veloci e rimborsi gratuiti, entro 30 giorni dalla data d'acquisto.
                Contattaci per ulteriori informazioni.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Corredini
