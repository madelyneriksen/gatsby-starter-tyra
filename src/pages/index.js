import React from "react"
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Hero from '../homepage/components/hero';

export default ({ data }) => {
  const post = data.post.edges[0].node;
  return (
    <Layout>
      <Hero
        title={post.frontmatter.title}
        image={post.frontmatter.postImage.childImageSharp.fluid}
        description={post.frontmatter.description} />
    </Layout>
  )
}

export const query = graphql`
  query {
    post: allMarkdownRemark(limit: 1, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            title
            description: metaDescription
            postImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
