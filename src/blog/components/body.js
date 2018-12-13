import React from "react";
import Sidebar from "./sidebar.js";
import "tachyons";
import "../styles/grid.css"; 


export default props => (
  <div className="min-vh-100 blog__grid">
    <div style={{gridArea: "header"}} />
    <Sidebar />
  </div>
)
