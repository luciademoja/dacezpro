module.exports = {
  //pathPrefix: `/mygatsby`,
  siteMetadata: {
    title: 'DacezPRO®',
    author: 'luciademoja',
    description: 'Based on Landed by HTML5 UP',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Prodotti',
        link: '#',
        items: [
          {
            name: 'Assorbenti ascellari bianchi',
            link: '/assorbenti-ascellari',
          },
          {
            name: 'Assorbenti ascellari neri',
            link: '/assorbenti-ascellari-neri',
          },
          {
            name: 'Bustine corredino',
            link: '/corredini',
          },
        ],
      },
      {
        name: 'Contattaci',
        link: '/contacts',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images/`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-offline',
  ],
}
