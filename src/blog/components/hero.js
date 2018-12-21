import React from 'react';
import { Link } from 'gatsby';
import "tachyons";


export default props => (
  <div className="bg-washed-red ph2 pv5 flex flex-column justify-center items-center">
    <Link to={`/${props.category}`} className="sans-serif ttu mid-gray tracked f6">{props.category}</Link>
    <h1 className="dark-gray display fw4 f1-l f2 tc">{props.title}</h1>
    <span className="sans-serif tracked ttu f6 mb2">by {props.author}</span>
    <span className="sans-serif tracked ttu f6">{props.date}</span>
  </div>
)
