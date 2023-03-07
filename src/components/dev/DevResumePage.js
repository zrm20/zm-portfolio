import React, { useRef, useState } from 'react';
import { Fab, SpeedDial, SpeedDialIcon, SpeedDialAction, ToggleButtonGroup, ToggleButton, Box, useMediaQuery, useTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import resumeTheme from '../../styles/resumeTheme';
import { useReactToPrint } from 'react-to-print';
import DevResume from '../resume/DevResume';
import DevResumeTraditional from '../resume/DevResumeTraditional';
import PrintIcon from '@mui/icons-material/Print';
import CloseIcon from '@mui/icons-material/Close';
import NotesIcon from '@mui/icons-material/Notes';
import ImageIcon from '@mui/icons-material/Image';
import { Link as RouterLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useUpdateTitle } from '../../hooks';

export default function DevResumePage() {
  const [iconMode, setIconMode] = useState(false);
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const printResumeRef = useRef();
  const handlePrint = useReactToPrint(
    {
      content: () => printResumeRef.current
    }
  );

  useUpdateTitle("Zach McCoy Resume");

  function toggleView() {
    setIconMode(!iconMode);
  };

  function handleViewChange(evt, value) {
    setIconMode(value);
  };

  const animationVariants = {
    leftHidden: {
      x: '-100vw',
      rotate: -45,
      transition: {
        duration: .5
      }
    },
    rightHidden: {
      x: '100vw',
      rotate: 45,
      transition: {
        duration: .5
      }
    },
    visible: {
      x: 0,
      rotate: 0,
      transition: {
        duration: .5
      }
    }
  };


  return (
    <div style={{
      width: '100%',
      height: '100%',
      overflowY: 'scroll',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

    }}>

      <ThemeProvider theme={resumeTheme}>
        <AnimatePresence mode="wait" >
          {
            iconMode ?
              <motion.div
                key="DevResume"
                variants={animationVariants}
                initial="rightHidden"
                animate="visible"
                exit="rightHidden"
              >
                <DevResume />
              </motion.div>
              :
              <motion.div
                key="TraditionResume"
                variants={animationVariants}
                initial="leftHidden"
                animate="visible"
                exit="leftHidden"
              >
                <DevResumeTraditional />
              </motion.div>
          }
        </AnimatePresence>
      </ThemeProvider>

      <Fab
        sx={{
          position: 'fixed',
          left: '5%',
          bottom: '3%'
        }}
        component={RouterLink}
        to='/dev'
      >
        <CloseIcon />
      </Fab>

      <Box
        sx={{
          position: 'fixed',
          bottom: '3%',
          p: 1,
          backgroundColor: 'background.default',
          borderRadius: '4px'
        }}
      >
        <ToggleButtonGroup
          color='primary'
          value={iconMode}
          variant
          onChange={handleViewChange}
          exclusive
        >
          <ToggleButton value={false} >
            {isSmScreen ? 'Traditional' : <NotesIcon />}
          </ToggleButton>
          <ToggleButton value={true} >
            {isSmScreen ? 'Infographic' : <ImageIcon />}
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>


      <SpeedDial
        ariaLabel='speed dial'
        sx={{ position: 'fixed', bottom: '3%', right: '5%' }}
        icon={<SpeedDialIcon />}
      >

        <SpeedDialAction
          icon={iconMode ? <NotesIcon /> : <ImageIcon />}
          tooltipTitle={iconMode ? 'Basic View' : 'Icon View'}
          onClick={toggleView}
        />

        <SpeedDialAction
          icon={<PrintIcon />}
          tooltipTitle='Print'
          onClick={handlePrint}
        />
      </SpeedDial>

      <ThemeProvider theme={resumeTheme}>
        <div style={{ display: 'none' }}>
          {
            iconMode ?
              <DevResume forPrint ref={printResumeRef} /> :
              <DevResumeTraditional forPrint ref={printResumeRef} />
          }
        </div>
      </ThemeProvider>
    </div>
  )
}
