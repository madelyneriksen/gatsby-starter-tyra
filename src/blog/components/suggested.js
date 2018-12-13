import React from 'react';
import EmailForm from './emailForm.js';
import 'tachyons';


export default props => (
  <div className="flex flex-column justify-end items-center pa2" style={{gridArea: "suggested"}}>
    <span className="sans-serif tracked ttu tc db pv3">CONTINUE READING</span>
    <div className="w-100 mw6 tc mb4">
      <div className="h5 bg-washed-red" />
      <span className="f4 serif tc dib pv2 ph3 display dark-gray">Incredible Winged Liner</span>
    </div>
    <div className="w-100 mw6 tc mb4">
      <div className="h5 bg-washed-red" />
      <span className="f4 serif tc dib pv2 ph3 display dark-gray">Matte is Back - Lipstick Lookbook</span>
    </div>
    <EmailForm />
  </div>
)
