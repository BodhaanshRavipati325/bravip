import React from 'react';
import "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/styles/Navbar.css";

import { ParallaxLayer } from "@react-spring/parallax";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
    <ParallaxLayer
          id="layerB"
          factor={1.5}
          offset={1}
          speed={0.25}
          style={{
            backgroundSize: "cover",
          }}
        >
          <h1 id="projects">Projects</h1>

          <motion.div
            id="panelA"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            // whileTap={{zIndex: 999, scale: 2}}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          />

          <motion.div
            id="panelB"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          />

          <motion.div
            id="panelC"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          />

          <motion.div
            id="panelD"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          />

        </ParallaxLayer>
        </>
  )
}
