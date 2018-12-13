import React from 'react';
import { Link } from 'gatsby';
import Layout from '../common/layouts';

export default ({ data }) => (
  <Layout>
    <div className="bg-washed-red ph2 pv5 flex flex-column justify-center items-center">
      <Link href={"/" + data.post.frontmatter.category} className="sans-serif ttu mid-gray tracked f5">{data.post.frontmatter.category}</Link>
      <h1 className="dark-gray display fw4 f1-l f2 tc">{data.post.frontmatter.title}</h1>
      <span className="sans-serif tracked ttu f5 mb2">by {data.post.frontmatter.author}</span>
      <span className="sans-serif tracked ttu f5">{data.post.frontmatter.date}</span>
    </div>
  </Layout>
)

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
