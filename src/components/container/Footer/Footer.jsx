import React from 'react';
import "./Footer.scss"
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';

const Footer = () => {

  const socialLinks = [
    'https://www.instagram.com/anas_sidz/',
    'https://www.linkedin.com/in/mohd-anas-77b85b247',
  ];


  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity:
          1
      }}
      transition={{duration: 1.5}}
      className='footer'
    >
      <div className="copyright">
        <p>Copyright&copy;2023 All rights reserved.Made by <span>Mohd Anas</span></p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
      {socialIcons.map((socialIcon, index) => (
        <a key={index} href={socialLinks[index]} target="_blank" rel="noopener noreferrer">
          {socialIcon}
        </a>
      ))}
    </div>
      </div>
    </motion.div>
  )
}

export default Footer