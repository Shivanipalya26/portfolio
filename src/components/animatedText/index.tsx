"use client";

import { motion } from "motion/react";

type AnimatedTextProps = {
  text: string;
  delay?: number;
};

const AnimatedText = ({ text, delay = 0 }: AnimatedTextProps) => {
  const letters = text.split("");

  return (
    <div className="inline-block overflow-hidden">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            delay: delay + index * 0.05,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
