import React from 'react';
import { StaticQuery, graphql } from 'gatsby';



export default props => (
  <div className="w-100 bg-light-gray pa3">
    <div className="mb4">
      <span className="f3 tc db display dark-gray mb2">Subscribe For More</span>
      <span className="f5 tc db serif lh-copy">Get updates delivered weekly!</span>
    </div>
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              mailChimpUrl
              mailChimpToken
            }
          }
        }
      `}
      render={data => (
        <form className="w-100 db flex flex-wrap items-center justify-around" action={data.site.siteMetadata.mailChimpUrl} method="POST">
          <input type="email" name="EMAIL" className="ba b--dark-gray bg-near-white pa2 sans-serif w-100 mb2" placeholder="Your Email" />
          <input class="dn" type="text" name={data.site.siteMetadata.mailChimpToken} tabindex="-1" value="" />
          <button type="submit" className="ba b--dark-gray bg-dark-gray near-white sans-serif tracked ttu pv2 w-100 pointer">Sign Up</button>
        </form>
      )} />
  </div>
)
