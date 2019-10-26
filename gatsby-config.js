module.exports = {
  siteMetadata: {
    title: `4252 Concepts`,
    description: `4252 Concepts was founded by Brian Rogers with the intention to be creative, helpful, and inspiring. \
                  Primarily through community involvement, the company is focused on helping individuals to large \
                  businesses with various services which include technology, photography, graphic arts, video creation, \
                  and, most importantly, achieving their potential.`,
    author: `@brian4252`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `4252 Concepts | Website`,
        short_name: `4252`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_64px.png`,
      },
    },
  ],
}
