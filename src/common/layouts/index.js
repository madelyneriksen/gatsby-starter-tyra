import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import 'tachyons';
import '../styles/custom.tachyons.css';


export default (props) => (
  <React.Fragment>
    <Helmet>
      <body className="bg-near-white mid-gray" />
    </Helmet>
    <Navbar />
    {props.children}
    <Footer />
  </React.Fragment>
)
