import React from 'react';
import {
  FaPinterestP,
  FaFacebookF
} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi'
import 'tachyons';


// TODO: Make these into icons

export default () => (
  <div className="dn db-l" style={{gridArea: "sidebar"}}>
    <div className="w3 bg-dark-gray flex flex-wrap" style={{position: "sticky", top: "4rem"}}>
      <span className="w-100 h3 flex items-center justify-center b near-white"><FaPinterestP /></span>
      <span className="w-100 h3 flex items-center justify-center b near-white"><FaFacebookF /></span>
      <span className="w-100 h3 flex items-center justify-center b near-white"><FiMail /></span>
    </div>
  </div>
)
