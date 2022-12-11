import React from "react";
import { motion } from "framer-motion";
import ProfileBg from "../images/ProfileBgImg.jfif";
import ProfileBg2 from "../images/animneBgImg.jfif";
import MERN__img from "../images/MERN__img.png";
import "../scss/Home.scss";

const Home = () => (
  <div id="home" className="app__header app__flex">
    <div className="app__header-info">
      <div
        className="app__header-badge"
      >
        <div className="badge-cmp app__flex">
          <p className="p-text">Hi, I am</p>
          <h1 className="head-text">Devjit</h1>
        </div>

        <p className="p-text app__header-role">
          Full Stack <img src={MERN__img} alt="" /> Developer
        </p>
        <div className="btn__container">
          <button className="btn btn__primary">Projects</button>
          <button className="btn btn__secondary">Contact Me</button>
        </div>
      </div>
    </div>

    <img
      className="app__header-img"
      src={ProfileBg}
      alt="profile_bg1"
    />
    <img
      className="app__header-img-mobile"
      src={ProfileBg2}
      alt="profile_bg2"
    />
  </div>
);

export default Home;
