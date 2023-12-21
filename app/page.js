"use client";

import Navbar from "@/src/components/Navbar/Navbar";
import "./page.css";
import Hero from "@/src/components/Hero/Hero";
import BrandingVideo from "@/src/components/BrandingVideo/BrandingVideo";
import WhatWeDo from "@/src/components/WhatWeDo/WhatWeDo";
import OurDiff from "@/src/components/OurDiff/OurDiff";
import { motion, useAnimation } from "framer-motion";
import HowItWorks from "@/src/components/HowItWorks/HowItWorks";

export default function Home() {
  const controls = useAnimation();
  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />

      <motion.div
      onViewportEnter={()=> controls.start({
        backgroundColor: "var(--secondary-color)"
      })}
      onViewportLeave={() =>
       controls.start({
         backgroundColor: "white",
      })
      }
      viewport={{amount: 0.4}}
      >
        <OurDiff />
      </motion.div>

      <HowItWorks/>
    </motion.div>
  );
}
