import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  container: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    container: {
      p: 2,
      mt: 2,
      width: '95%',
      maxWidth: 900,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      "& .MuiToggleButtonGroup-root": {
        mt: 1
      },
      "& .MuiTextField-root": {
        mt: 2,
        width: '100%',
        maxWidth: 600
      }
    }
  }
};
