import React from 'react';
import Layout from '../common/layouts';
import { Link, graphql } from 'gatsby';
import Breadcrumbs from './components/breadcrumbs';
import Preview from './components/post-preview.js';
import Seo from '../common/seo';
import 'tachyons';


export default class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.posts.edges;
    const hasNext = this.props.data.posts.pageInfo.hasNextPage;
    const category = this.props.pageContext.category;
    return (
      <Layout>
        <Seo
          title={`Posts Tagged ${category} - Page ${this.props.pageContext.pageNumber}`} />
        <div className="pv5 flex items-center justify-center bg-washed-red">
          <h1 className="fw1 tc f2 display">Posts Tagged {category}</h1>
        </div>
        <div className="mw9 center">
          <Breadcrumbs
            lastName={category}
            lastPath={`${category}`}
            currentPage={`Page ${this.props.pageContext.pageNumber}`} />
          {posts.map(({node}) => (
            <Preview
              fluidImage={node.frontmatter.postImage.childImageSharp.fluid}
              slug={node.frontmatter.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              category={node.frontmatter.category}
              description={node.frontmatter.metaDescription} />
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
  query categoryPosts($skip: Int!, $limit: Int!, $category: String!) {
    posts: allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "post"}, category: {eq: $category}}},
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
