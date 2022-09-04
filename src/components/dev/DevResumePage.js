import React, { useRef } from 'react';
import { Fab } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import resumeTheme from '../../styles/resumeTheme';
import ReactToPrint from 'react-to-print';
import DevResume from '../resume/DevResume';
import PrintIcon from '@mui/icons-material/Print';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink } from 'react-router-dom';

export default function DevResumePage() {
  const printResumeRef = useRef();

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

      <DevResume />

      <ReactToPrint
        trigger={() => (
          <Fab
            sx={{
              position: 'fixed',
              right: '5%',
              bottom: '3%'
            }}
          >
            <PrintIcon />
          </Fab>
        )}
        content={() => printResumeRef.current}
      />

      <ThemeProvider theme={resumeTheme}>
        <div style={{ display: 'none' }}>
          <DevResume forPrint ref={printResumeRef} />
        </div>
      </ThemeProvider>
    </div>
  )
}
