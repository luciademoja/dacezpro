import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import AssorbentiAscellariBanner from '../components/AssorbentiAscellariBanner'
import DolceSognoBanner from '../components/DolceSognoBanner'

class Home extends React.Component {
  render() {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{ lang: 'it' }}
          title="DacezPRO®"
          meta={[
            { name: 'description', content: 'Dacezpro Landing' },
            { name: 'keywords', content: 'dacezpro, assorbenti ascellari, corredini neonato' },
          ]}
        ></Helmet>
        <Banner />
        <AssorbentiAscellariBanner />
        <DolceSognoBanner />
      </Layout>
    )
  }
}

export default Home
