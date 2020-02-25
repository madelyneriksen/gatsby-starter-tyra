import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark';


const slugToFilename = str => str.replace(`/`, `-`) + `.md`;

const YYYYMMDD = date => date.toISOString().split("T")[0]

const defaultFrontmatter = form => ({
  title: form.title,
  slug: form.slug,
  author: form.author,
  category: form.category,
  date: YYYYMMDD(new Date()),
  postImage: `./img/flatlay.jpg`,
  metaDescription: ``,
  type: `post`,
});


const CreatePostPlugin = new RemarkCreatorPlugin({
  label: `New Blog Post`,
  filename: form => `content/posts/${slugToFilename(form.slug)}`,
  frontmatter: defaultFrontmatter,
  fields: [
    {
      label: `Title`,
      name: `title`,
      description: `The title of your post.`,
      component: `text`,
    },
    {
      label: `Author`,
      name: `author`,
      description: `Your full name.`,
      component: `text`,
    },
    {
      label: `Category`,
      name: `category`,
      description: `Category of your post.`,
      component: `text`,
    },
    {
      label: `Post URL`,
      name: `slug`,
      description: `The URL your post will be visible at.`,
      component: `text`,
    },
  ],
});


export default CreatePostPlugin;
