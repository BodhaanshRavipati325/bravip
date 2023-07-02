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
        <Tree content="Test" type={<span style={typeStyles}>🙀</span>} />
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
        <Tree content="hello" />
        <Tree content="hello" />
      </Tree>
    </ParallaxLayer>
  );
};

export default TreeMenu;
