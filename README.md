Tyra - Feminine Blog Powered by Gatsby
=====
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-green.svg)](https://shields.io/) [![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://shields.io/)

Tyra is a Gatsby starter that focuses on legibility and a clean, feminine design with 2010 influences. Technically, the goals for Tyra are having a "plug and play" blog, with great SEO, tooling, and integrations all included.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/madelyneriksen/gatsby-starter-tyra)

## Getting Started

The first step with using Tyra is customizing your metadata in `gatsby-config.js`.

```javascript
siteMetadata: {
  navbarLinks: [
    {to: "/makeup", name: "Makeup"},
    {to: "/lifestyle", name: "Lifestyle"},
    {to: "/blog", name: "blog"},
  ],
  title: "", // The name of your blog
  description: "", // SEO Description
  siteUrl: "", // Base URL of your blog (https://example.com)
  homepageHeader: "", // Header text for the homepage
  homepageAbout: "", // Banner body for the homepage
  mailChimpUrl: "", // Link you your mailchimp campaign (From the embedded form maker)
  mailChimpToken: "", // The hidden field on mailchimp forms
  pinterest: "", // Your pinterest profile 
  facebook: "", // Your facebook profile
  twitter: "", // Your twitter profile
}
```

This is used for configuring data across the site, improving SEO, and increasing engagement on social media.

Next up, you can begin customizing the images and copy in `content/`. Finally, you can add your own blog posts! Posts are written in Markup, an easy way to create webpages.

## Screenshot

![Screenshot of Tyra Homepage](./screenshot.jpg)
