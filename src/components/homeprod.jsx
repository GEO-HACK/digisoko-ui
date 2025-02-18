import React from "react";
import { easeInOut, motion } from "framer-motion";
import image1 from "../assets/images/veg.png";
import image2 from "../assets/images/spice.png";
import image3 from "../assets/images/fruit.png";

const servicesData = [
  {
    id: 1,
    image: image1,
    title: "Vegetables",
    subtitle:
      "Freshly harvested vegetables packed with essential nutrients, perfect for healthy and delicious meals.",
  },
  {
    id: 2,
    image: image2,
    title: "Hot Spices",
    subtitle:
      "Aromatic and fiery spices that add bold flavors and a tantalizing heat to your culinary creations.",
  },
  {
    id: 3,
    image: image3,
    title: "Fruits",
    subtitle:
      "Juicy, sun-ripened fruits bursting with natural sweetness and packed with vitamins for a refreshing treat.",
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
      staggerChildren: 0.4, // delay between animations
    },
  },
};

const HomeProd = () => {
  return (
    <section className="">
      <div className="container my-16 space-y-4">
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
            className="text-3xl font-bold text-violet-700"
          >
            Fresh Produce &{" "}
            <span className="text-lime-400">Aromatic Spices</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.2,
            }}
            className="text-sm font-semibold text-gray-700 opacity-50"
          >
            Fresh, vibrant produce and aromatic spices enhance every dish,
            adding rich flavors and scents. From basil to cumin, they bring
            balance and warmth, elevating meals with the earth's natural
            abundance.
          </motion.p>
        </div>
        {/* card section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ amount: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="text-center p-4 space-y-6"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-48 h-48 object-cover mx-auto rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-lime-400">
                  {service.title}
                </h1>
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
