import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import {
  FaPinterestP,
  FaFacebookF
} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi'
import 'tachyons';


export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitle
          }
        }
      } 
    `}
    render={data => (
      <footer className="pa2 bg-dark-gray near-white pv5">
        <div className="flex flex-wrap justify-around w-100 mw9 center mb5">
          <div className="w-100 mw5 mb4">
            <span className="display f2">{data.site.siteMetadata.siteTitle}</span>
            <hr />
            <div className="w-100 flex justify-around items-center pv2">
              <span><FaFacebookF /></span>
              <span><FaPinterestP /></span>
              <span><FiMail /></span>
            </div>
          </div>
          <div className="flex flex-column">
            <span className="near-white sans-serif f5 tracked mb3 db">WRITING BY {data.site.siteMetadata.siteTitle}</span>
            <Link to="/blog" className="near-white sans-serif f5 tracked pv1 db">ALL POSTS</Link>
            <Link to="#" className="near-white sans-serif f5 tracked pv1 db">RSS FEED</Link>
          </div>
          <div className="flex flex-column">
            <span className="near-white sans-serif f5 tracked mb3 db">MORE ON {data.site.siteMetadata.siteTitle}</span>
            <Link to="/about" className="near-white sans-serif f5 tracked pv1 db">ABOUT US</Link>
            <Link to="#" className="near-white sans-serif f5 tracked pv1 db">NEWS LETTER</Link>
          </div>
        </div>
        <div className="w-100 mw9 center silver mb3">
          <div className="w-100 bb b--mid-gray mv3"></div>
          <div className="flex w-100 mw6 items-center justify-center justify-start-ns">
            <Link to="/" className="silver sans-serif f5 tracked pv1 db mh1">SITEMAP</Link>
            <span className="mh1">|</span>
            <Link to="/" className="silver sans-serif f5 tracked pv1 db mh1">PRIVACY</Link>
            <span className="mh1">|</span>
            <a href="https://github.com/madelyneriksen/gatsby-starter-tyra" className="silver sans-serif f5 tracked pv1 db mh1">THEME</a>
          </div>
        </div>
        <div className="w-100 mw9 silver center sans-serif f6">
          <p>Tyra Theme (C) 2018 by Madelyn Eriksen under terms of the "MIT" software license.</p>
        </div>
      </footer>
    )} />
)
