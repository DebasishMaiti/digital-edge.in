"use client";

import { motion } from "framer-motion";

interface AnimatedWordsProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedWords({ text, className, delay = 0 }: AnimatedWordsProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 300,
      },
    },
    hidden: {
      opacity: 0,
      y: 8,
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      // className={className ? `${className}  ` : "inline-flex flex-wrap"}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child as any}
          style={{ display: "inline-block" }}
          key={index}
          className="mr-[0.25em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
