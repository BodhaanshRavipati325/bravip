import React from "react";

import "../styles/Navbar.css";

import { ParallaxLayer } from "@react-spring/parallax";

import Tree from "react-animated-tree";

const TreeMenu = ({ scrollTo }) => {
  return (
    <ParallaxLayer
      onClick={() => {
        scrollTo();
      }}
      id="layerB"
      speed={1}
      factor={0.5}
      style={{
        backgroundSize: "cover",
        position: "fixed",
        // top: 1,
        marginLeft: "42vw",
        marginTop: "85vh",
        color: "white",
        fill: "white",
        width: "100%",
        fontSize: "2.8vw",
      }}
    >
      <Tree content="🌊🌊🌊🌊">
        <Tree content="Check out my work!" />
        <Tree content="Projects" open={true}>
          <a href="">
          <Tree content="Sync60" />
          </a>
          <a href="https://google.com">
          <Tree content="Crypto Safety" open = {true}>
            <Tree content="(refresh a few times)" />
          </Tree>
          </a>
        </Tree>
        <Tree content="Experience" open={false}>
          <Tree content="Cofounder @ Sync60" />
          <Tree content="Front End Intern @ Usmosis" />
          <Tree content="your company could be here :)" />
        </Tree>
      </Tree>
    </ParallaxLayer>
  );
};

export default TreeMenu;
