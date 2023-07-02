import React from "react";
import "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/styles/Navbar.css";
import styles from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/styles/styles.module.css";

import github from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/github.png";
import instagram from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/instagram.png";
import linkedin from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/linkedin.png";

import { ParallaxLayer } from "@react-spring/parallax";

export default function Navbar() {
  return (
    <>
      {/* <ParallaxLayer id="github" sticky={{ start: 0.005, end: 0.005 }}> */}
        <a href="https://github.com/BodhaanshRavipati325" target="_blank">
          <img src={github}></img>
        </a>
      {/* </ParallaxLayer> */}

      {/* <ParallaxLayer id="instagram" sticky={{ start: 0.005, end: 0.005 }}> */}
        <a href="https://www.instagram.com/bodhiishere/?hl=en" target="_blank">
          <img src={instagram}></img>
        </a>
      {/* </ParallaxLayer> */}

      {/* <ParallaxLayer id="linkedin" sticky={{ start: 0.005, end: 0.005 }}> */}
        <a
          href="https://www.linkedin.com/in/bodhaansh-ravipati-16515419b/"
          target="_blank"
        >
          <img src={linkedin}></img>
        </a>
      {/* </ParallaxLayer> */}
    </>
  );
}
