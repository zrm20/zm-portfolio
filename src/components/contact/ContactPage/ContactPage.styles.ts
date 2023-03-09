import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

interface Style {
  root: SxProps;
  container: SxProps;
  successIcon: SxProps;
  homeLink: SxProps;
  successContainer: CSSProperties;
};

export default function useStyles(): Style {

  return {
    root: {
      with: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    container: {
      with: '95%',
      maxWidth: 600,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      p:2, 
      mt: 2,
      "& h2": {
        mb: 2
      }
    },
    successIcon: {
      fontSize: '6rem',
      color: 'success.main',
      mb: 2
    },
    homeLink: {
      mt: 2
    },
    successContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
};
