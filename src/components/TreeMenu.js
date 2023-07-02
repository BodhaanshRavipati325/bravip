import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

import Tree from "react-animated-tree";
import "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/styles/Navbar.css";

const treeStyles = {
    position: 'absolute',
    // top: 1,
    left: '42%',
    color: 'white',
    fill: 'white',
    width: '100%',
    fontSize: '40px',
  }
  
  const typeStyles = {
    fontSize: '2em',
    verticalAlign: 'middle'
  }

export default function TreeMenu() {

    const parallax = useRef<IParallax>(null)
    
  return (
    <Tree content="🌊🌊🌊🌊" style={treeStyles} onClick={() => parallax.current.scrollTo(1)}>
    <Tree content="hello" type={<span style={typeStyles}>🙀</span>} canHide />
    <Tree content="subtree with children" canHide>
      <Tree content="hello" />
      <Tree content="sub-subtree with children">
        <Tree id="section2" content="child 1" style={{ color: '#63b1de' }} />
        <Tree content="child 2" style={{ color: '#63b1de' }} />
        <Tree content="child 3" style={{ color: '#63b1de' }} />
      </Tree>
      <Tree content="hello" />
    </Tree>
    <Tree content="hello" canHide />
    <Tree content="hello" canHide />
  </Tree>
  );
}