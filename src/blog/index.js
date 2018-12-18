import React from 'react';
import Layout from '../common/layouts';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import 'tachyons';


export default class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.posts.edges;
    const hasNext = this.props.data.posts.pageInfo.hasNextPage;
    return (
      <Layout>
        <div className="pv5 flex items-center justify-center bg-washed-red">
          <h1 className="fw1 tc f2 display">All Blog Posts</h1>
        </div>
        <div className="mw9 center">
          <div className="w-100 pv3 flex items-center tracked ttu sans-serif justify-around mw5">
            <Link
              to="/"
              className="dark-gray">Home</Link>
            <span>&nbsp;>&nbsp;</span>
            <Link
              to="/blog"
              className="dark-gray">Blog</Link>
            <span>&nbsp;>&nbsp;</span>
            <span className="mid-gray">Page {this.props.pageContext.pageNumber}</span>
          </div>
          {posts.map(({node}) => (
            <div className="pv3 flex justify-center items-center flex-wrap">
              <Img
                className="w-100 mw6 h-100"
                fluid={node.frontmatter.postImage.childImageSharp.fluid}
                alt="" />
              <div className="mw7 pa2 ph4-ns">
                <span className="db f2 display">
                  <Link
                    className="dark-gray no-underline"
                    to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
                </span>
                <div className="mv3 mb5-ns flex justify-between">
                  <div className="db f5 ttu tracked sans-serif">{node.frontmatter.date}</div>
                  <div className="db f5 ttu tracked sans-serif">TAGGED: {node.frontmatter.category}</div>
                </div>
                <div className="serif f4 lh-copy">{node.frontmatter.metaDescription}</div>
              </div>
            </div>
          ))}
          <div className="pv5 flex w-100">
            {hasNext && 
                <Link
                  className="dark-gray sans-serif ttu tracked no-underline"
                  to={this.props.pageContext.nextPage}>Next Page &rarr;</Link>
            }
          </div>
        </div>
      </Layout>
    )
  }
}


export const blogListQuery = graphql`
  query posts($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "post"}}},
      sort: {fields: frontmatter___date, order: DESC},
      limit: $limit,
      skip: $skip,
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            category
            metaDescription
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1080, maxHeight: 512) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`
