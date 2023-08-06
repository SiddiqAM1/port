import React from "react";
import { motion } from "framer-motion";

const YourComponent = () => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.6, 1)} // You can adjust the variants accordingly
      className={css.imageContainer} // Add a CSS class for styling the image container
    >
      <img src="./SiddiqImage.jpg" alt="Your Alt Text" /> {/* Replace with your image path */}
    </motion.div>
  );
};

export default YourComponent;
