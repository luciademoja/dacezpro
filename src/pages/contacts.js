import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

const Contacts = props => (
  <Layout>
    <Helmet>
      <title>Contatti DacezPRO®</title>
      <meta name="description" content="Contatti" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Chi siamo?</h2>
          <p>
            DacezPRO® è una giovane azienda italiana che, con amore e passione, crea e scopre prodotti di qualità
            dall'aspetto accattivante ed eleganti. La nostra missione nasce da un'esigenza di mercato ben specifica:
            ovvero fornire prodotti qualitativamente migliori rispetto alla concorrenza, con un costo competitivo e di
            conseguenza ad un costo accessibile al grande pubblico. Grazie alla vasta esperienza e dedizione che
            abbiamo e all'alto livello di impegno che mettiamo ogni giorno, siamo in grado di fornire prodotti privi
            di difetti, di modo che i nostri clienti siano pienamente soddisfatti.
          </p>
          <p>
            Dacezpro è venditore leader su Amazon. Trovi i prodotti che ami ad un prezzo vantaggioso con il massimo
            ella qualità.
          </p>
        </header>
        <section>
          <h3>Contatti</h3>
          <a href="mailto:dacezpro@ydacezpro.com">Scrivici una email!</a>
        </section>
      </div>
    </div>
  </Layout>
)

export default Contacts
