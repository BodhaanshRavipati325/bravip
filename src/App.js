import React, { useRef } from "react";

import ".//styles/Navbar.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import github from ".//images/github.png";
import signature from ".//images/header.png";
import instagram from ".//images/instagram.png";
import linkedin from ".//images/linkedin.png";

import FrontPage from "./components/FrontPage";
import TreeMenu from "./components/TreeMenu.js";

export function App() {
  const parallax = useRef(null);

  function scrollTo() {
    parallax.current.scrollTo(0.3);
  }

  return (
    <>
      <Parallax pages={1.5} ref={parallax}>
        <ParallaxLayer id="github" sticky={{ start: 0.005, end: 0.005 }}>
          <a href="https://github.com/BodhaanshRavipati325" target="_blank">
            <img
              width="3.5%"
              height="auto"
              src={github}
              alt="github website"
            ></img>
            <img
              id="signature"
              width="15%"
              height="auto"
              src={signature}
            ></img>
          </a>
        </ParallaxLayer>
        <ParallaxLayer id="instagram" sticky={{ start: 0.005, end: 0.005 }}>
          <a
            href="https://www.instagram.com/bodhiishere/?hl=en"
            target="_blank"
          >
            <img
              width="3.5%"
              height="auto"
              src={instagram}
              alt="instagram website"
            ></img>
          </a>
        </ParallaxLayer>
        <ParallaxLayer id="linkedin" sticky={{ start: 0.005, end: 0.005 }}>
          <a
            href="https://www.linkedin.com/in/bodhaansh-ravipati-16515419b/"
            target="_blank"
          >
            <img
              width="3.5%"
              height="auto"
              src={linkedin}
              alt="linkedin website"
            ></img>
          </a>
        </ParallaxLayer>

        <FrontPage></FrontPage>

        <TreeMenu scrollTo={scrollTo} />
      </Parallax>
    </>
  );
}

export default App;
