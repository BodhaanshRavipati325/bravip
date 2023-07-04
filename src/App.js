import React, { useRef } from "react";

import "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/styles/Navbar.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import github from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/github.png";
import signature from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/header.png";
import instagram from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/instagram.png";
import linkedin from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/linkedin.png";

import FrontPage from "./components/FrontPage";
import TreeMenu from "./components/TreeMenu";

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
              width="48px"
              height="48px"
              src={github}
              alt="github website"
            ></img>
            <img
              id="signature"
              width="206px"
              height="96px"
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
              width="48px"
              height="48px"
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
              width="48px"
              height="48px"
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