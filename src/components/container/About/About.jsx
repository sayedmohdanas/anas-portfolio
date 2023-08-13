import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
import { bios } from "../../../Data";
import portfolio1 from "../../../assets/portfolio.jpeg";
import asimResume from '../../../assets/asimResume.pdf'

const About = () => {


  return (
    <div className="container " id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.img
            src={portfolio1}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            I am a highly skilled front-end developer with a passion for coding
            and design. With expertise in HTML, CSS, Tailwind CSS, Bootstrap,
            WordPress, Wix, Elementor, React, and React Native, I specialize in
            creating visually stunning and user-friendly interfaces. Whether
            it's developing responsive websites, customizing WordPress themes,
            or building cross-platform mobile applications, I strive to exceed
            client expectations by delivering high-quality results. I have a
            strong eye for design and a commitment to writing clean and
            efficient code. With my dedication, creativity, and strong
            communication skills, I am confident in my ability to contribute to
            the success of any project.
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}
          <motion.a
            href={asimResume}
            download="asimResume.pdf"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
