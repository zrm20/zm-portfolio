import React, { CSSProperties } from "react";

import { motion, MotionProps } from "framer-motion";

interface Props extends MotionProps {
  direction?: "up" | "down" | "left" | "right"
  duration?: number;
  delay?: number;
  style?: CSSProperties;
  children?: JSX.Element | JSX.Element[] | string;
};

export default function SlideIn(props: Props): JSX.Element {
  const {
    direction = "up",
    duration = 1,
    delay = 0,
  } = props;

  type Position = {
    x: string | number,
    y: string | number
  };

  const initialPosition: Position = {
    x: 0,
    y: 0
  };

  switch(direction) {
    case "up": initialPosition.y = '100vh'; break;
    case "down": initialPosition.y = '-100vh'; break
    case "left": initialPosition.x = '100vw'; break;
    case "right": initialPosition.x = '-100vw'; break;
  };

  return (
    <motion.div
      initial={initialPosition}
      animate={
        {
          y: 0,
          x: 0
        }
      }
      transition={{ duration, delay }}
      {...props}
    >
      {props.children}
    </motion.div>
  )
};