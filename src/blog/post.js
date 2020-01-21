import React from 'react';
import Layout from '../common/layouts';
import Hero from './components/hero.js';
import Body from './components/body.js';
import Seo from './seo.js';
import MetaSeo from '../common/seo';
import { graphql } from 'gatsby';

import { liveRemarkForm } from 'gatsby-tinacms-remark';


const Post = ({ location, data, isEditing, setIsEditing }) => {
  const {
    category,
    date,
    dateOriginal,
    author,
    title,
    slug,
    metaDescription
  } = data.post.frontmatter;
  const content = data.post.html;
  return (
    <Layout>
      <Seo
        slug={slug}
        title={title}
        date={dateOriginal}
        description={metaDescription}
        author={author}
        image={data.post.frontmatter.postImage.childImageSharp.original.src} />
      <MetaSeo
        title={title}
        description={metaDescription} />
      <Hero author={author} date={date} category={category} title={title} />
      <Body
        content={content}
        description={metaDescription}
        image={data.post.frontmatter.postImage.childImageSharp.original.src}
        location={location}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    </Layout>
  )
}


export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        date(formatString: "MMM Do, YYYY")
        dateOriginal: date
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
      ...TinaRemark
    }
    date: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        date
      }
    }
  }
`

const FormConfig = {
  label: `Blog Post`,
  queryName: `post`,
  fields: [
    {
      label: `Title`,
      name: `rawFrontmatter.title`,
      description: `The title of your post.`,
      component: `text`,  // A simple text input
    },
    {
      label: `Post Image`,
      name: `rawFrontmatter.postImage`,
      component: `image`,
      parse: filename => `./img/${filename}`, // function to convert uploaded images.
      previewSrc: (formValues, { input }) => {
        // Create a function for viewing previews.
        const [_, field] = input.name.split(".");
        const node = formValues.frontmatter[field];
        const result = node ? node.childImageSharp.fluid.src : "";
        return result;
      },
      uploadDir: () => `/content/posts/img/`,
    },
    {
      label: `Author`,
      name: `rawFrontmatter.author`,
      description: `Your full name.`,
      component: `text`,
    },
    {
      label: `Date Published`,
      name: `rawFrontmatter.date`,
      description: `The date your post was published.`,
      component: `date`,
      dateFormat: `YYYY-MM-DD`,
      timeFormat: false,
    },
    {
      label: `Category`,
      name: `rawFrontmatter.category`,
      description: `The category of your post.`,
      component: `text`,
    },
    {
      label: `Post URL`,
      name: `rawFrontmatter.slug`,
      description: `The URL your post will be visible at.`,
      component: `text`,
    },
    {
      label: `SEO Description`,
      name: `rawFrontmatter.metaDescription`,
      description: `Description used for search engine results.`,
      component: `text`,
    },
    {
      label: `Content`,
      name: `rawMarkdownContent`,
      description: `Write your blog post here!`,
      component: `markdown`,
    },
  ]
};

export default liveRemarkForm(Post, FormConfig);
