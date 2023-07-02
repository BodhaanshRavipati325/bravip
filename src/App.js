import React, { useRef, useState } from "react";

import "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/styles/Navbar.css";

import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import github from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/github.png";
import signature from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/header.png";
import instagram from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/instagram.png";
import linkedin from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/linkedin.png";

import FrontPage from "./components/FrontPage";

import Tree from "react-animated-tree";

const treeStyles = {
  position: "absolute",
  // top: 1,
  left: "42%",
  color: "white",
  fill: "white",
  width: "100%",
  fontSize: "40px",
};

const typeStyles = {
  fontSize: "2em",
  verticalAlign: "middle",
};

function scrollTo(parallax, position) {
  parallax.current.scrollTo(position);
}

export function App() {
  const [isDown, setIsDown] = useState(false);

  const parallax = useRef(null);

  return (
    <>
      <Parallax pages={1.5} ref={parallax}>
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
        <ParallaxLayer
                  onClick={() => {
                    parallax.current.scrollTo(0.3);
                  }}
          id="layerB"
          speed={1}
          factor={0.5}
          style={{
            backgroundSize: "cover",
          }}
        >
          <Tree content="🌊🌊🌊🌊" style={treeStyles}>
            <Tree
              content="Test"
              type={<span style={typeStyles}>🙀</span>}
            />
            <Tree content="Projects">
              <Tree content="hello" />
              <Tree content="sub-subtree with children">
                <Tree
                  id="section2"
                  content="child 1"
                  style={{ color: "#63b1de" }}
                />
                <Tree content="child 2" style={{ color: "#63b1de" }} />
                <Tree content="child 3" style={{ color: "#63b1de" }} />
              </Tree>
              <Tree content="hello" />
            </Tree>
            <Tree content="hello"/>
            <Tree content="hello"/>
          </Tree>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
