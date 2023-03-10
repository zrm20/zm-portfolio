import React, { CSSProperties } from "react";

import { motion, MotionProps } from "framer-motion";

interface Props extends MotionProps {
  initialOpacity?: number;
  endOpacity?: number;
  duration?: number;
  delay?: number;
  style?: CSSProperties;
  children?: JSX.Element | JSX.Element[] | string;
};

export default function FadeIn(props: Props): JSX.Element {
  const {
    initialOpacity = 0,
    endOpacity = 1,
    duration = 1,
    delay = 0,
  } = props;

  return (
    <motion.div
      initial={{ opacity: initialOpacity }}
      animate={{ opacity: endOpacity }}
      transition={{ duration, delay }}
      {...props}
    >
      {props.children}
    </motion.div>
  )
};