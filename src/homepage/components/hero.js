import React from "react"
import Img from 'gatsby-image';
import '../../common/styles/custom.tachyons.css'
import 'tachyons';

export default (props) => (
  <React.Fragment>
    <Img
      className="w-100 vh-50 mw9 center"
      fluid={props.image}
      alt={props.description} />
    <div
      className="h-auto bg-near-white mw7 w-100 flex flex-column items-center justify-center pv4 ph2 center tl-75-l">
      <h1 className="fw1 display dark-gray db tc w-100 mw6 f3 f2-ns">{props.title}</h1>
      <p className="serif mw6 tc f5 dn dib-l">{props.description}</p>
    </div>
  </React.Fragment>
)
