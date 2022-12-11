import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import '../scss/SocialMedia.scss'

const SocialMedia = () => {
  return(
  <div className="app__social">
    <a href='https://www.linkedin.com/in/devjit-bose/' target="_blank" rel="noreferrer">
      <BsLinkedin />
    </a>
    <a href='https://github.com/AnimeFlix007/' target="_blank" rel="noreferrer">
      <BsGithub />
    </a>
    <a href='https://www.instagram.com/ig_zatchyt/' target="_blank" rel="noreferrer">
      <BsInstagram />
    </a>
  </div>
)};

export default SocialMedia;