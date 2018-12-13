import React from 'react';
import Helmet from 'react-helmet';
import 'tachyons';
import '../styles/custom.tachyons.css';


export default (props) => (
  <React.Fragment>
    <Helmet>
      <body className="bg-near-white mid-gray" />
    </Helmet>
    {props.children}
  </React.Fragment>
)
