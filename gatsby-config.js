require('dotenv').config()

const queries = require('./src/utils/algoliaQueries')

module.exports = {
  siteMetadata: {
    title: `Lucas Yamamoto`,
    position: `CTO na Codeby`,
    description: `Sou um desenvolvedor Web e CTO da CodeBy. Busco estar por dentro das tecnologias no mercado de e-commerce e programação no geral, sempre focando em me renovar e buscar por soluções úteis e práticas para mim e para as empresas para as quais prestamos serviços.`,
    author: `@lucasayb`,
    siteUrl: `https://www.lucasyamamoto.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `lucas-yamamoto`
      }
    },
    // Needs to be first to work properly with remark
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "uploads",
              staticFolderName: 'static',
              // [Optional] Include the following fields, use dot notation for nested fields
              // All fields are included by default
              include: ['thumbnail'],
              // [Optional] Exclude the following fields, use dot notation for nested fields
              // No fields are excluded by default
              exclude: ['redirect_from'],
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280
            }
          },
          `gatsby-remark-lazy-load`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lucas Yamamoto`,
        short_name: `Lucas Yamamoto`,
        start_url: `/`,
        background_color: `#0a061c`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#0a061c`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true, // default: false
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GATSBY_GTM_ID,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
    'gatsby-redirect-from',
    'gatsby-plugin-meta-redirect',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`, // make sure this is always the last one
  ],
  
}
