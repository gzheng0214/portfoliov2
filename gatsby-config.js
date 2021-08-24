module.exports = {
  siteMetadata: {
    title: "Gavin Zheng",
    description: "Gavin Zheng is an aspiring web developer.",
    titleTemplate: `%s | Gavin Zheng`,
    url: "http://localhost:8000",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GavinZheng`,
        short_name: `GavinZheng`,
        start_url: `/`,
        background_color: `#f4f1ec`,
        theme_color: `#728073`,
        display: `minimal-ui`,
        icon: "src/images/logo.png",
      },
    },
    `gatsby-plugin-offline`,
  ],
};
