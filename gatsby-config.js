module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `guides`,
        path: `${__dirname}/content/`
      }      
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: []
      }
    }
  ],
}
