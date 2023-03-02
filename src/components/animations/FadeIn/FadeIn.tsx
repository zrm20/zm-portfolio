import React, { CSSProperties, ReactElement } from "react";

import { motion, MotionProps } from "framer-motion";

interface Props extends MotionProps {
  initialOpacity?: number;
  endOpacity?: number;
  duration?: number;
  style?: CSSProperties;
  children?: ReactElement<any>;
};

export default function FadeIn(props: Props): JSX.Element {
  const {
    initialOpacity = 0,
    endOpacity = 1,
    duration = 1,
  } = props;

  return (
    <motion.div
      initial={{ opacity: initialOpacity }}
      animate={{ opacity: endOpacity }}
      transition={{ duration }}
      {...props}
    >
      {props.children}
    </motion.div>
  )
};