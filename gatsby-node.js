const path = require('path');

exports.createPages = ({ graphql, actions}) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allPosts: allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}}}) {
              edges {
                node {
                  frontmatter {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        // Create all the blog post pages.
        const template = path.resolve('src/blog/post.js');
        result.data.allPosts.edges.forEach(({ node }) => {
          let slug = node.frontmatter.slug;
          createPage({
            path: slug,
            component: template,
            context: {
              slug,
            }
          })
        })
      })
    )
  })
}
