import React from "react";
import "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/styles/Navbar.css";

import Projects from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/components/Projects.js";
import Slider from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/components/Slider.js";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import github from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/github.png";
import instagram from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/instagram.png";
import linkedin from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/linkedin.png";

import styles from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/styles/styles.module.css";

export function App() {
  return (
    <>
      <Parallax pages={4}>
        <ParallaxLayer id="github" sticky={{ start: 0.005, end: 0.005 }}>
          <a href="https://github.com/BodhaanshRavipati325" target="_blank">
            <img src={github}></img>
          </a>
        </ParallaxLayer>

        <ParallaxLayer id="instagram" sticky={{ start: 0.005, end: 0.005 }}>
          <a href="https://www.instagram.com/bodhiishere/?hl=en" target="_blank">
            <img src={instagram}></img>
          </a>
        </ParallaxLayer>

        <ParallaxLayer id="linkedin" sticky={{ start: 0.005, end: 0.005 }}>
          <a href="https://www.linkedin.com/in/bodhaansh-ravipati-16515419b/" target="_blank">
            <img src={linkedin}></img>
          </a>
        </ParallaxLayer>

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

        <ParallaxLayer sticky={{ start: 0.25, end: 0.3 }} speed={1}>
          <div className={styles.container}>
            <Slider>SSHHH!!</Slider>
          </div>
        </ParallaxLayer>

        <Projects></Projects>

        <ParallaxLayer
          id="layerC"
          factor={1.5}
          offset={2}
          speed={0.25}
          style={{
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          id="layerD"
          offset={3}
          speed={0.1}
          style={{
            backgroundSize: "cover",
          }}
        >
          {/* <h1>Hello World!</h1> */}
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
