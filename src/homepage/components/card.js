import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import 'tachyons';


export default (props) => (
  <div className="w-100 mw6 pa2">
    <Link to={props.to}><Img fluid={props.image} alt="" className="w-100 h5"/></Link>
    <div className="pa2 display dark-gray f3 tc mb3 h3">
      {props.title}
    </div>
    <div className="pa2 lh-copy serif tc mb3 h3">
      {props.description} 
    </div>
    <div className="pa2 flex justify-end serif h3">
      <Link to={props.to} className="dark-gray tracked ttu sans-serif f5">Read More &raquo;</Link>
    </div>
  </div>
)
