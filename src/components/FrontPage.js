import React from "react";
import "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/styles/Navbar.css";

import Slider from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/components/Slider.js";

import { ParallaxLayer } from "@react-spring/parallax";

import styles from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/styles/styles.module.css";

export default function FrontPage() {
  return (
    <>
      <ParallaxLayer
        id="layerA"
        speed={1}
        // factor={1.5}
        style={{
          backgroundSize: "cover",
        }}
      ></ParallaxLayer>
      <ParallaxLayer sticky={{ start: 0.25, end: 0.25 }} speed={1}>
        <h1 id="name">Bodhaansh Ravipati</h1>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 0.45, end: 0.45 }} speed={1}>
        <h2 id="job">Full Stack Developer</h2>
      </ParallaxLayer>
    </>
  );
}
