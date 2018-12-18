module.exports = {
  siteMetadata: {
    navbarLinks: [
      {to: "#", name: "makeup"},
      {to: "#", name: "style"},
      {to: "#", name: "blog"},
    ],
    siteTitle: "TYRA",
    siteUrl: "https://tyra-starter.netlify.com",
    homepageHeader: "Welcome to Your New Blog",
    homepageAbout: "Tyra is a modern, sleek and feminine Gatsby.js theme. Easily create a beautiful and fast blog and draw attention to your stellar content."
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1400,
            },
          },
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Karla', 'Playfair Display', 'Lora']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ['/success'],
        cookieDomain: "tyra-starter.netlify.com",
      }
    }
  ]
}
