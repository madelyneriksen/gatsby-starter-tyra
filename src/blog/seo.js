import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';


export default props => (
  <StaticQuery
    query={graphql`
        query {
          site {
            siteMetadata {
              siteTitle
              baseURL
            }
          }
        }
      `}
      render={data => (
        <Helmet>
          <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${data.site.siteMetadata.baseURL}${props.slug}"
            },
            "headline": "${props.title}",
            "image": ["${data.site.siteMetadata.baseURL}${props.image}"],
            "datePublished": "${props.date}",
            "dateModified": "${props.date}",
            "author": {
              "@type": "Person",
              "name": "${props.author}"
            },
            "publisher": {
              "@type": "Organization",
              "name": "${data.site.siteMetadata.siteTitle}",
              "logo": {
                "@type": "ImageObject",
                "url": "${data.site.siteMetadata.baseURL}/logo.png"
              }
            },
            "description": "${props.description}"
        }
      `}</script>
  </Helmet>
      )} />
)
