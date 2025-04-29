import React from "react";
import HomeBg from "./assetes/homeBg.jpg";
import { delay, motion } from 'framer-motion';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // delay between child animations
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0, transition: {duration: 1, ease: "easeOut" } },
  };
  
  return (
    <>
      <div
        style={{ backgroundImage: `url(${HomeBg})` }}
        className="w-full h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center md:justify-start "
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
         className="w-lg h-80 bg-black/70 ml-0 text-white space-y-4 flex flex-col justify-center pl-12 md:ml-48">
          <div>
            <motion.h1 variants={itemVariants} className="text-5xl font-bold">Desvila De Villa</motion.h1>
          </div>
          <motion.div variants={itemVariants}  className="text-2xl">24 North Street, California, USA</motion.div>
          <motion.div variants={itemVariants}>3520 sqrft, 5 Bed, 3 Bath, 2 Brage</motion.div>
          <motion.div variants={itemVariants} className="text-3xl">For Sale $54,000</motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
