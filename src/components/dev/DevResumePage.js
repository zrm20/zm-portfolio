import React, { useRef, useState, useEffect } from 'react';
import { Fab, SpeedDial, SpeedDialIcon, SpeedDialAction, ToggleButtonGroup, ToggleButton, Box } from '@mui/material';
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

export default function DevResumePage() {
  const [iconMode, setIconMode] = useState(true);
  const printResumeRef = useRef();
  const handlePrint = useReactToPrint(
    {
      content: () => printResumeRef.current
    }
  );

  useEffect(() => { document.title = 'Zach McCoy Resume' }, []);

  function toggleView() {
    setIconMode(!iconMode);
  };

  function handleViewChange(evt, value) {
    setIconMode(value);
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
        {
          iconMode ?
            <DevResume /> :
            <DevResumeTraditional />
        }
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
          <ToggleButton value={false} >Traditional</ToggleButton>
          <ToggleButton value={true} >Infographic</ToggleButton>
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
