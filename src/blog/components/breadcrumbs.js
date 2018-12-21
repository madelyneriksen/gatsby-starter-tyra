import React from 'react';
import { Link } from 'gatsby';
import 'tachyons';


export default (props) => (
  <div className="w-100 f6 pv3 flex items-center tracked ttu sans-serif justify-around mw5">
    <Link
      to="/"
      className="dark-gray">Home</Link>
    <span>&nbsp;>&nbsp;</span>
    <Link
      to={props.lastPath}
      className="dark-gray">{props.lastName}</Link>
    <span>&nbsp;>&nbsp;</span>
    <span className="mid-gray">{props.currentPage}</span>
  </div>
)
