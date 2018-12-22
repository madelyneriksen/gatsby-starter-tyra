import React from 'react';
import {
  FaPinterestP,
  FaFacebookF
} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi'
import 'tachyons';


// TODO: Make these into icons

export default (props) => {
  const url = encodeURIComponent(window.location.href);
  const base = window.location.origin;
  let { desc, img } = props;
  desc = encodeURIComponent(desc);
  img = encodeURIComponent(base + "/" + img);
  return (
    <div className="dn db-l" style={{gridArea: "sidebar"}}>
      <div className="w3 bg-dark-gray flex flex-wrap" style={{position: "sticky", top: "4rem"}}>
        <a
          href={`https://pinterest.com/pin/create/button/?url=${url}&description=${desc}&media=${img}`}
          className="w-100 h3 flex items-center justify-center b near-white"><FaPinterestP /></a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          className="w-100 h3 flex items-center justify-center b near-white"><FaFacebookF /></a>
        <a
          href={`mailto:?&body=${url}`}
          className="w-100 h3 flex items-center justify-center b near-white"><FiMail /></a>
      </div>
    </div>
  )
}
