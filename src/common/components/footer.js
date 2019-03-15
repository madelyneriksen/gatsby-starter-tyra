import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import {
  FaPinterestP,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGithub
} from 'react-icons/fa';
import 'tachyons';


export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitle: title
            mailChimpUrl
            pinterest
            facebook
            twitter
            youtube
            github
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
              {data.site.siteMetadata.facebook && (
                <a
                  className="near-white"
                  href={data.site.siteMetadata.facebook}
                >
                  <FaFacebookF />
                </a>
              )}

              {data.site.siteMetadata.youtube && (
                <a
                  className="near-white"
                  href={data.site.siteMetadata.youtube}
                >
                  <FaYoutube />
                </a>
              )}

              {data.site.siteMetadata.github && (
                <a
                  className="near-white"
                  href={data.site.siteMetadata.github}
                >
                  <FaGithub />
                </a>
              )}

              {data.site.siteMetadata.pinterest && (
                <a
                  className="near-white"
                  href={data.site.siteMetadata.pinterest}
                >
                  <FaPinterestP />
                </a>
              )}

              {data.site.siteMetadata.twitter && (
                <a className="near-white" href={data.site.siteMetadata.twitter}>
                  <FaTwitter />
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-column">
            <span className="near-white sans-serif f5 tracked mb3 db">WRITING BY {data.site.siteMetadata.siteTitle}</span>
            <Link to="/blog" className="near-white sans-serif f5 tracked pv1 db">ALL POSTS</Link>
            <Link to="/rss.xml" className="near-white sans-serif f5 tracked pv1 db">RSS FEED</Link>
          </div>
          <div className="flex flex-column">
            <span className="near-white sans-serif f5 tracked mb3 db">MORE ON {data.site.siteMetadata.siteTitle}</span>
            <Link to="/about" className="near-white sans-serif f5 tracked pv1 db">ABOUT US</Link>
            <a href={data.site.siteMetadata.mailChimpUrl} className="near-white sans-serif f5 tracked pv1 db">NEWS LETTER</a>
          </div>
        </div>
        <div className="w-100 mw9 center silver mb3">
          <div className="w-100 bb b--mid-gray mv3"></div>
          <div className="flex w-100 mw6 items-center justify-center justify-start-ns">
            <a href="/sitemap.xml" className="silver sans-serif f5 tracked pv1 db mh1">SITEMAP</a>
            <span className="mh1">|</span>
            <Link to="/privacy" className="silver sans-serif f5 tracked pv1 db mh1">PRIVACY</Link>
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
