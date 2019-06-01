module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    description:
      "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
    author: "@gatsbyjs",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        // eslint-disable-next-line @typescript-eslint/camelcase
        short_name: "starter",
        // eslint-disable-next-line @typescript-eslint/camelcase
        start_url: "/",
        // eslint-disable-next-line @typescript-eslint/camelcase
        background_color: "#663399",
        // eslint-disable-next-line @typescript-eslint/camelcase
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-preact",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-offline",
    "gatsby-plugin-layout",
    "gatsby-plugin-netlify",
  ],
}
