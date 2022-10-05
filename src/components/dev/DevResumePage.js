import React, { useRef, useState, useEffect } from 'react';
import { Fab, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
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

  useEffect(() => {document.title = 'Zach McCoy Resume'}, []);

  function toggleView() {
    setIconMode(!iconMode);
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

      <ThemeProvider theme={resumeTheme}>
        {
          iconMode ?
            <DevResume /> :
            <DevResumeTraditional />
        }
      </ThemeProvider>

      <SpeedDial
        ariaLabel='speed dial'
        sx={{ position: 'fixed', bottom: '5%', right: '3%' }}
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
