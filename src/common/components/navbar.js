import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';


const MultiLink = (props) => {
  const internal = /^\/(?!\/)/.test(props.to);
  let result;
  if (internal) {
    result = (<Link to={props.to} className={props.className}>{props.children}</Link>)
  } else {
    result = (<a href={props.to} className={props.className}>{props.children}</a>)
  }
  return result;
}


export default props => (
  <div
    className="bg-white flex w-100 h3 pv3 flex justify-between items-center top-0 z-999 bb b--light-gray"
    style={{position: "sticky"}}>
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              navbarLinks {
                to
                name
              }
              siteTitle
            }
          }
        }  
      `}
      render={data => (
        <React.Fragment>
          <div className="w-100 mw8 flex justify-around items-center">
            <Link to="/" className="display ttu tracked dark-gray f4 no-underline">{data.site.siteMetadata.siteTitle}</Link>
            <Link to="/" className="sans-serif ttu mid-gray f5 no-underline dn dib-l">HOME</Link>
            {data.site.siteMetadata.navbarLinks.map(navLink => (
              <MultiLink to={navLink.to} className="sans-serif ttu mid-gray f5 no-underline dn dib-l">{navLink.name}</MultiLink>
            ))}
          </div>
          <div className="w-100 mw5 flex justify-around items-center">
            <Link href="/sign-up" className="sans-serif ttu light-red f5 no-underline dn dib-l">SIGN UP</Link>
            <span className="sans-serif mid-gray dn dib-l">|</span>
            <Link href="/about" className="sans-serif ttu mid-gray f5 no-underline dn dib-l">ABOUT</Link>
          </div>
        </React.Fragment>
    )} />
  </div>
)
