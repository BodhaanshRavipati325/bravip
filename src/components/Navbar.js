import React from "react";
import "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/styles/Navbar.css";

import github from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/github.png";
import instagram from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/instagram.png";
import linkedin from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/linkedin.png";

import { ParallaxLayer } from "@react-spring/parallax";

export default function Navbar() {
  return (
    <>
      <ParallaxLayer id="github" sticky={{ start: 0.005, end: 0.005 }}>
        <img src={github}></img>
      </ParallaxLayer>

      <ParallaxLayer id="instagram" sticky={{ start: 0.005, end: 0.005 }}>
        <img src={instagram}></img>
      </ParallaxLayer>

      <ParallaxLayer id="linkedin" sticky={{ start: 0.005, end: 0.005 }}>
        <img src={linkedin}></img>
      </ParallaxLayer>
    </>
  );
}
