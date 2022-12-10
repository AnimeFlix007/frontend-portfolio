import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client, urlFor } from "../Cliient";
import "../scss/About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });

  }, []);
  return (
    <section id="about" className="app__about">
      <h2 className="head-text">
        I've <span>Great Knowledge</span> <br />
        and <span>Good Projects</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1], x: [-100, 0] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween", delay: 0.3 }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
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