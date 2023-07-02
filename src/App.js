import * as React from "react";

import "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/styles/Navbar.css";

import Projects from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/components/Projects.js";
import Slider from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/components/Slider.js";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { TypeAnimation } from "react-type-animation";

import github from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/github.png";
import instagram from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/instagram.png";
import linkedin from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/images/linkedin.png";

import styles from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/styles/styles.module.css";

function scrollDown() {
  window.scroll({ top: 1, left: 0, behavior: "smooth" });
}

export function App() {
  return (
    <>
      <Parallax pages={2}>
        <ParallaxLayer id="github" sticky={{ start: 0.005, end: 0.005 }}>
          <a href="https://github.com/BodhaanshRavipati325" target="_blank">
            <img src={github}></img>
          </a>
        </ParallaxLayer>

        <ParallaxLayer id="instagram" sticky={{ start: 0.005, end: 0.005 }}>
          <a
            href="https://www.instagram.com/bodhiishere/?hl=en"
            target="_blank"
          >
            <img src={instagram}></img>
          </a>
        </ParallaxLayer>

        <ParallaxLayer id="linkedin" sticky={{ start: 0.005, end: 0.005 }}>
          <a
            href="https://www.linkedin.com/in/bodhaansh-ravipati-16515419b/"
            target="_blank"
          >
            <img src={linkedin}></img>
          </a>
        </ParallaxLayer>

        <ParallaxLayer
          id="layerA"
          speed={4}
          // factor={1.5}
          style={{
            backgroundSize: "cover",
          }}
        >
          <ParallaxLayer sticky={{ start: 0.25, end: 0.25 }} speed={1}>
            <h1 id="name">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Bodhaansh Ravipati",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                ]}
                wrapper="span"
                speed={25}
                repeat={Infinity}
              />
            </h1>
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 0.45, end: 0.45 }} speed={0.5}>
            <h2 id="job">Full Stack Developer</h2>
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 0.25, end: 0.25 }} speed={1}>
            <div className={styles.container}>
              <Slider>SSHHH!!</Slider>
            </div>
          </ParallaxLayer>
        </ParallaxLayer>

        <Projects></Projects>
      </Parallax>
    </>
  );
}

export default App;
