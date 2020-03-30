module.exports = {
  siteMetadata: {
    title: `Corona in India Visualized`,
    description: `All information about the Corona Virus pandemic in India is visualized here in this website`,
    author: `@samsimson`,
    siteUrl: `https://www.coronavisindia.com`,
    keywords: [
      "coronavirus",
      "coronavirus india",
      "corona india",
      "corona affected in india",
      "corona all over the world",
      "corona affected states in india",
      "corona",
      "covid-19",
      "virus",
      "corona virus",
      "india",
      "data",
      "live",
      "visual",
      "corona in india visualized",
      "corona in india",
      "corona symptoms",
    ],
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.coronavisindia.com",
        sitemap: "https://www.coronavisindia.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/virus.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // ...
          "gatsby-remark-a11y-emoji",
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
