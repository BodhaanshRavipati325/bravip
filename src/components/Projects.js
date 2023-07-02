import React from "react";
import "/Users/bodhaanshravipati/Documents/create-react-app/my-app/src/styles/Navbar.css";

import { ParallaxLayer } from "@react-spring/parallax";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <ParallaxLayer id="layerB" factor={1} offset={1} speed={1}>
        e33e3e
        <motion.div
          id="panelA"
          // initial={{ scale: 0 }}
          // whileInView={{ scale: 1 }}
          // transition={{
          //   type: "spring",
          //   stiffness: 300,
          //   damping: 30,
          // }}
        />
      </ParallaxLayer>
    </>
  );
}
