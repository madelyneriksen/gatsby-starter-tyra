import React from 'react';
import Layout from '../common/layouts';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import 'tachyons';


export default ({ pageContext }) => {
  const { nodes, page, prev, next, pages, total, limit, skip } = pageContext;
  return (
    <Layout>
      {nodes.map(({node}) => (
        <div className="pa5 mw9 flex center pa2">
          <div>
            <div>{skip}</div>
            <span className="db f2 display dark-gray">{node.frontmatter.title}</span>
            <div className="mt3 mb5 flex justify-between">
              <div className="db f5 ttu tracked sans-serif">{node.frontmatter.date}</div>
              <div className="db f5 ttu tracked sans-serif">TAGGED: {node.frontmatter.category}</div>
            </div>
            <div className="serif f4 lh-copy">{node.frontmatter.metaDescription}</div>
          </div>
        </div>
      ))}
    </Layout>
  )
}
