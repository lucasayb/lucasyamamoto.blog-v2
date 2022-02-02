module.exports = {
  siteMetadata: {
    title: `Lucas Yamamoto`,
    position: `Desenvolvedor Back End`,
    description: `Sou um desenvolvedor Web e CTO da CodeBy. Busco estar por dentro das tecnologias no mercado de e-commerce e programação no geral, sempre focando em me renovar e buscar por soluções úteis e práticas para mim e para as empresas para as quais prestamos serviços.`,
    author: `@lucasayb`,
    siteUrl: `https://www.lucasyamamoto.com/`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
              name: "uploads"
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
