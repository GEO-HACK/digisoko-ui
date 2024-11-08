import React from "react";
import { easeIn, easeInOut, motion } from "framer-motion";
import image1 from "../assets/images/veg.png";
import image2 from "../assets/images/spice.png";
import image3 from "../assets/images/fruit.png";

import { section } from "framer-motion/client";

const servicesData = [
  {
    id: 1,
    image: image1,
    title: "Vegetables",
    subtitle:
      " Lorem ipsum, dolor sit amet consectetur. Nihil temporibus at totam qu ",
  },
  {
    id: 1,
    image: image2,
    title: "hot spices",
    subtitle:
      " Lorem ipsum, dolor sit amet consectetur. Nihil temporibus at totam qu ",
  },
  {
    id: 1,
    image: image3,
    title: "Fruits",
    subtitle:
      " Lorem ipsum, dolor sit amet consectetur. Nihil temporibus at totam qu ",
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: easeInOut,
    },
  },
};
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4, //delay between animations
    },
  },
};

const HomeProd = () => {
  return (
    <section className="">
      <div className="container my-16  space-y-4 ">
        <div className="text-center max-w-lg mx-auto space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.2,
            }}
            className=" text-3xl font-bold text-violet-700"
          >
            Fresh Produce &{" "}
            <span className="text-lime-400">Aromatic spices</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.2, //added delay for the firat time
            }}
            className="text-sm opacity-50 "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            voluptas quas nihil, qui odio nam unde, nostrum natus fugit autem
            minima illum? Illum velit sunt tempore adipisci quisquam deserunt
            saepe!
          </motion.p>
        </div>
        {/* card section */}
        <motion.div
         variants={containerVariants}
         initial="hidden"
         whileInView={"visible"}
         viewport={{amount:0.8}}

         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

         
            {servicesData.map((service) => (
                <motion.div
                variants={cardVariants}
                className="text-center p-4 space-y-6">
                    <img src={service.image} alt="" className="w-48 h-48 object-cover mx-auto rounded-lg  hover:scale-110 transition-transform duration-300 cursor-pointer" />
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold text-lime-400">{service.title}</h1>
                        <p className="text-gray-500">{service.subtitle}</p>

                    </div>
                    </motion.div>
            ))}
         </motion.div>
      </div>
    </section>
  );
};

export default HomeProd;
