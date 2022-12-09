import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import frontEnd from "../images/frontEnd.jpg";
import reactJs from "../images/reactJs.jpg";
import MERN from "../images/MERN.jfif";
import backEnd from "../images/backend.jfif";

// import { AppWrap, MotionWrap } from '../../wrapper';
import "../scss/About.scss";
// import { urlFor, client } from '../../client';

const About = () => {
  const abouts = [
    {
      title: "ReactJs Developer",
      image: reactJs,
    },
    {
      title: "REST API / Node.js",
      image: backEnd,
    },
    {
      title: "UI Designs",
      image: frontEnd,
    },
    {
      title: "MERN Stack Development",
      image: MERN,
    },
  ];

  return (
    <section className="app__about">
      <h2 className="head-text">
        I've <span>Great Knowledge</span> <br />
        and <span>Good Projects</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.image} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
