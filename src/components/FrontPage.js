import * as React from "react";

import "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/styles/Navbar.css";

import Slider from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/components/Slider.js";

import { ParallaxLayer } from "@react-spring/parallax";
import { TypeAnimation } from "react-type-animation";


import styles from "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/styles/styles.module.css";

export default function FrontPage() {
  return (
    <>
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
    </>
  );
}
