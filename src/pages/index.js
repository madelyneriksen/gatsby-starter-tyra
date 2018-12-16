import React from "react"
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Hero from '../homepage/components/hero';
import Card from '../homepage/components/card';
import About from '../homepage/components/about';

export default ({ data }) => {
  let post = data.featuredPost.edges[0].node;
  return (
    <Layout>
      <Hero
        title={post.frontmatter.title}
        image={post.frontmatter.postImage.childImageSharp.fluid}
        to={post.frontmatter.slug}
        description={post.frontmatter.description} />
      <div className="flex flex-wrap center mw9 justify-around">
        {data.cards.edges.map(({node}) => (
          <Card
            title={node.frontmatter.title}
            image={node.frontmatter.postImage.childImageSharp.fluid}
            to={node.frontmatter.slug}
            description={node.frontmatter.description} />
        ))}
      </div>
      <About />
    </Layout>
  )
}

export const query = graphql`
  query {
    featuredPost: allMarkdownRemark(limit: 1, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            title
            description: metaDescription
            slug
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
    cards: allMarkdownRemark(skip: 1, limit: 3, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            title
            description: metaDescription
            slug
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
