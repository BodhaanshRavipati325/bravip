import * as React from "react";

import "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/styles/Navbar.css";

import Projects from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/components/Projects.js";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import github from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/github.png";
import instagram from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/instagram.png";
import linkedin from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/linkedin.png";
import signature from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/header.png";

import FrontPage from "./components/FrontPage";

function scrollDown() {
  window.scroll({ top: 1, left: 0, behavior: "smooth" });
}

export function App() {
  return (
    <>
      <Parallax pages={2}>
        <ParallaxLayer id="github" sticky={{ start: 0.005, end: 0.005 }}>
          <a href="https://github.com/BodhaanshRavipati325" target="_blank">
            <img width="48px" height="48px" src={github}></img>
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
            <img width="48px" height="48px" src={instagram}></img>
          </a>
        </ParallaxLayer>

        <ParallaxLayer id="linkedin" sticky={{ start: 0.005, end: 0.005 }}>
          <a
            href="https://www.linkedin.com/in/bodhaansh-ravipati-16515419b/"
            target="_blank"
          >
            <img width="48px" height="48px" src={linkedin}></img>
          </a>
        </ParallaxLayer>
        <FrontPage></FrontPage>
        <Projects></Projects>
      </Parallax>
    </>
  );
}

export default App;
