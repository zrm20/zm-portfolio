import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';

export default function IntroBackdrop({ duration = 6 }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: duration * .75,
        duration: duration * .25
      }}
    >
      <Box sx={styles.root}>
        <AnimatedLogo sx={styles.logo} duration={duration * .75} />
      </Box>
    </motion.div>
  )
};

const styles = {
  root: {
    backgroundColor: 'background.default',
    width: '100vw',
    height: '100vh',
    position: 'static',
  },
  logo: {
    margin: 'auto',
    width: '60vw',
    height: '60vw',
  }
};
