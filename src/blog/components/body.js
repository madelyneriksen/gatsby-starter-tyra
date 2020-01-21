import React from "react";
import Sidebar from "./sidebar.js";
import Suggested from './suggested.js';
import { Wysiwyg } from '@tinacms/fields';
import { TinaField } from '@tinacms/form-builder';

import "tachyons";

import "../../common/styles/custom.tachyons.css";
import "../styles/grid.css";

const buttonStyles = `
db pv3 ph5 mb3 tracked ttu b bg-dark-gray
near-white sans-serif no-underline
hover-gray b--dark-gray
`;

export default ({
  isEditing,
  setIsEditing,
  content,
  image,
  description,
  location,
}) => (
  <div className="min-vh-100 blog__grid">
    <div style={{gridArea: "header"}} />
    <section
      className="mw8 serive f4 lh-copy center pa2 article__container"
      style={{gridArea: "content"}}
    >
      {process.env.NODE_ENV === "development" && (
        <button
          className={buttonStyles}
          onClick={() => setIsEditing(p => !p)}
        >
          {isEditing ? 'Preview' : 'Edit'}
        </button>
      )}
      <TinaField name="rawMarkdownBody" Component={Wysiwyg}>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </TinaField>
    </section>
    <Sidebar
      img={image}
      desc={description}
      location={location}
    />
    <Suggested />
  </div>
);
