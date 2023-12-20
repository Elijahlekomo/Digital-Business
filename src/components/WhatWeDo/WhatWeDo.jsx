'use client'

import React from "react";
import './WhatWeDo.css'
import { features } from "@/src/utils/data";
import Image from "next/image";
import {motion} from 'framer-motion'
import { desVariants, tagVaraints, titleVaraints } from "@/src/utils/animation";

const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
            {/* head of section */}
          <div className="wwd-head">
            <motion.span
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVaraints}
            className="tag">What we do</motion.span>
            <motion.span
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVaraints}
            className="title">
              {" "}
              Empowering founders with non dilutive capital and expertise
            </motion.span>
            <motion.span
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="des">Here is how we can evaluate</motion.span>
          </div>

          {/* two blocks  */}
          <div className="wwd-blocks">
            {/* first block */}
            <div className="wwd-block">
                <motion.span 
                variants={titleVaraints}
                initial="offscreen"
                whileInView={"onscreen"}
                className="sec-title">Blue Advances</motion.span>
                <motion.span 
                variants={desVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                className="text">Fund recurring growth expense e.g customer acquisition,
                    inventory </motion.span>

                <div className="block-features">
                    {
                        features.slice(0, 3).map((feature, i)=> (
                            <div className="block-feature" key={i}>
                                <Image src={feature.icon} alt="feature" width={60} height={60}/>
                                <span>{feature.title}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* second block */}
            <div className="wwd-block">
            <motion.span 
            variants={titleVaraints}
            initial="offscreen"
            whileInView={"onscreen"}
            className="sec-title">Blue seed</motion.span>
                <motion.span 
                variants={desVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                className="text">Fund recurring growth expense e.g customer acquisition,
                    inventory </motion.span>

                <div className="block-features">
                    {
                        features.slice(3, 6).map((feature, i)=> (
                            <div className="block-feature" key={i}>
                                <Image src={feature.icon} alt="feature" width={60} height={60}/>
                                <span>{feature.title}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
          </div>

           {/* support block */}
           <div className="wwd-support">
            {/* left side */}
            <div>
                <span className="sec-title"> Blue Growth Support</span>
                <span className="des">
                    Data Insights and full stack expertise to supercharge growth
                </span>
            </div>

            {/* right side */}
            <div>
                <span className="text">
                    Actionable data insights by connecting revenue, marketing and
                    social media platforms
                </span>
                <span className="text">
                    Actionable data insights by connecting revenue, marketing and
                    social media platforms
                </span>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
