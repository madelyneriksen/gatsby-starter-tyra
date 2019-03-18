import React from 'react';
import Layout from '../common/layouts';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import Seo from '../common/seo';


export default ({props, data}) => (
  <Layout>
    <Seo
      title={`About ${data.site.siteMetadata.title}`}
      description={data.site.siteMetadata.description} />
 
    <div className="mw9 center flex flex-wrap pv5-l w-100">
      <div className="mw7 w-100 pa2">

        <h1 className="display fw1 db lh-copy"> 404 // Page Not Found</h1>

        <p className="mw7 w-100 lh-copy serif pa2 flex flex-column justify-center f4" >        We couldn&#39;t find what you were looking for.</p>
        <Link to="/" className="dib bg-dark-gray b near-white hover-bg-mid-gray pv3 ph4 ttu tracked sans-serif no-underline mv2">Go to homepage</Link>
      </div>

    </div>
  </Layout>


)


export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }`
