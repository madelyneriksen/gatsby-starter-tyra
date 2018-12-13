import React from 'react';
import Layout from '../common/layouts';
import Hero from './components/hero.js';
import Body from './components/body.js';
import { graphql } from 'gatsby';


export default ({ data }) => {
  const {category, date, author, title} = data.post.frontmatter;
  const content = data.post.html;
  return (
    <Layout>
      <Hero author={author} date={date} category={category} title={title} />
      <Body content={content} />
    </Layout>
  )
}


export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        date(formatString: "MMM Do, YYYY")
        category
        author
        title
        metaDescription
        slug
        postImage {
          childImageSharp {
            original {
              src
            }
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    date: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        date
      }
    }
  }
`
