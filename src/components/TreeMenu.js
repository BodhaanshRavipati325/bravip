import React from "react";

import "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/styles/Navbar.css";

import { ParallaxLayer } from "@react-spring/parallax";

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
      }}
    >
      <Tree content="🌊🌊🌊🌊" style={treeStyles}>
        <Tree content="Check out my work!" />
        <Tree content="Projects" open={false}>
          <Tree content="child 1" />
          <Tree content="child 2" />
        </Tree>
        <Tree content="Experience" open={false}>
          <Tree content="child 1" />
          <Tree content="child 2" />
        </Tree>
      </Tree>
    </ParallaxLayer>
  );
};

export default TreeMenu;
