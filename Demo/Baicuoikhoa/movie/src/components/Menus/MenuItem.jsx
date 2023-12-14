import React from "react";
import { Link } from "react-router-dom";
import { randomRgbaColor } from "../utils";

function MenuItem({ to, name, Icon }) {
  return (
    <Link
        style={{textDecoration:'none'}}
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="subMenu"
    >
      <Icon className="icon" style={{color: randomRgbaColor(1)}}/>
      <span> {name} </span>
    </Link>
  );
}

export default MenuItem;