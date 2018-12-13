import React from 'react';


// TODO: Hook this up to mailchimp


export default props => (
  <div className="w-100 bg-light-gray pa3">
    <div className="mb4">
      <span className="f3 tc db display dark-gray mb2">Subscribe For More</span>
      <span className="f5 tc db serif lh-copy">Get updates delivered weekly!</span>
    </div>
    <div className="w-100 db flex flex-wrap items-center justify-around">
      <input className="ba b--dark-gray bg-near-white pa2 sans-serif w-100 mb2" placeholder="Your Email" />
      <button className="ba b--dark-gray bg-dark-gray near-white sans-serif tracked ttu pv2 w-100 pointer">Sign Up</button>
    </div>
  </div>
)
