import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import assorbenti1 from '../assets/images/assorbenti/assorbenti1.jpg'
import assorbenti4 from '../assets/images/assorbenti/assorbenti4.jpg'
import assorbenti6 from '../assets/images/assorbenti/assorbenti6.jpg'
import assorbenti3 from '../assets/images/assorbenti/assorbenti3.jpg'
import assorbenti5 from '../assets/images/assorbenti/assorbenti5.jpg'
import assorbenti7 from '../assets/images/assorbenti/assorbenti7.jpg'


const AssorbentiAscellari = props => (
  <Layout>
    <Helmet>
      <title>Assorbenti Ascellari - DacezPRO®</title>
      <meta name="description" content="Assorbenti Ascellari DacezPRO®" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Assorbenti Ascellari Uomo/Donna (Unisex) Bianchi</h2>
          <p>
            100% Made In Italy (40 pezzi)
          </p>
        </header>
        <div className="row gtr-150">
          <div className="col-8 col-12-medium">
            <section id="content">
              <a href="#" className="image fit">
                <img src={assorbenti1} alt="" />
              </a>
              <h3>✅ PROTEZIONE ASCELLE TOTALE: </h3>
              <p>
                I nostri assorbenti per ascelle antisudore sono stati concepiti per
                garantire a chi ha problemi di eccessiva sudorazione o ipersudorazione ascelle una sensazione di
                benessere in qualsiasi momento della giornata ed in tutte le occasioni. Che tu sia a lavoro, in giro
                a passeggiare con i tuoi amici oppure in palestra, potrai sempre adoperare i nostri assorbenti ascelle.
                Utilizza le nostre alette per ascelle anche per occasioni uniche come cene, matrimoni e ricevimenti.
              </p>
              <h3>✅ ADATTABILE E PERSONALIZZABILE: </h3>
              <p>
                Grazie al nostro team di sviluppo e ricerca, i nostri tamponi per
                ascelle sono nuovi ed innovativi: la particolare forma realizzata, più ampia al centro, non lascia
                passare neanche una goccia di sudore ascelle. Questo per garantirti una sensazione di benessere durante
                tutto il giorno. Inoltre, grazie all'utilizzo di materiali italiani certificati, non avrai alcun
                fastidio di pizzicore sotto ascella o sulla pelle, dandoti così una sicurezza completa.
              </p>
              <a href="#" className="image fit">
                <img src={assorbenti4} alt="" />
              </a>
              <h3>✅ PRATICI ED INVISIBILI:</h3>
              <p>
                Grazie alle dimensioni generose dei nostri salva ascelle assorbenti, di ben 16x9,7cm avrai una
                ventilazione completa del sotto ascelle e al contempo stesso un'altissima densità di assorbi sudore
                ascelle. Indossare i nostri tamponi ascelle sudore è veramente facile e pratico: basta rimuovere
                l'adesivo, incollarlo all'abito e premere con forza sulla parte per farlo aderire al tuo vestito.
                Ciò ti permetterà di avere un potere salva camicie sudore invidiabile!
              </p>
              <h3>✅ GARANZIA COMPLETA: </h3>
              <p>
                Certi della qualità del nostro prodotto, offriamo la garanzia 'Soddisfatti o
                Rimborsati': resi veloci e rimborsi gratuiti, entro 30 giorni dalla data d'acquisto.
                Contattaci per ulteriori informazioni.
              </p>
            </section>
          </div>
          <div className="col-4 col-12-medium">
            <section id="sidebar">
              <section>
                <h3>15,99 € Spedizione GRATUITA sul tuo primo ordine idoneo.</h3>
                <p>
                  ✅ GARANZIA COMPLETA: Certi della qualità del nostro prodotto, offriamo la garanzia 'Soddisfatti o
                  Rimborsati': resi veloci e rimborsi gratuiti, entro 30 giorni dalla data d'acquisto.
                  Contattaci per ulteriori informazioni.
                </p>
                <footer>
                  <ul className="actions">
                    <li>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.amazon.it/DacezPRO%C2%AE-Assorbenti-Ascellari-Iperidrosi-Ascellare/dp/B07XBVFDRQ/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=dacezpro&qid=1580909597&s=baby&sr=1-1-catcorr"
                        className="button">
                        Acquista Subito!
                      </a>
                    </li>
                  </ul>
                </footer>
                <a href="#" className="image fit">
                  <img src={assorbenti5} alt="" />
                </a>
              </section>
              <hr />
              <section>
                <h3>✅ 100% MADE IN ITALY:</h3>
                <p>
                  Hai problemi di sudorazione ascelle forte e non sai come risolvere questa
                  fastidiosa situazione? Grazie al Pack da 40 pezzi con qualità 100% italiana, abbiamo la soluzione
                  che fa al caso tuo! Gli adesivi ascelle che abbiamo utilizzato sono extraresistenti a tutte i
                  movimenti che fai durante il giorno e non si staccheranno dai vestiti, cosa molto comune nei prodotti
                  cinesi. Con i nostri sottoascelle usa e getta non dovrai più sostenere situazioni imbarazzanti in
                  pubblico.
                </p>
                <footer>
                  <ul className="actions">
                    <li>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.amazon.it/DacezPRO%C2%AE-Assorbenti-Ascellari-Iperidrosi-Ascellare/dp/B07XBVFDRQ/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=dacezpro&qid=1580909597&s=baby&sr=1-1-catcorr"
                        className="button">
                        Compra su Amazon
                      </a>
                    </li>
                  </ul>
                </footer>
                <a href="#" className="image fit">
                  <img src={assorbenti6} alt="" />
                </a>
                <a href="#" className="image fit">
                  <img src={assorbenti3} alt="" />
                </a>
                <a href="#" className="image fit">
                  <img src={assorbenti7} alt="" />
                </a>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AssorbentiAscellari
