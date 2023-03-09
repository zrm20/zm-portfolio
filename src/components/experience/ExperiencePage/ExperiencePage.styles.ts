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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '95%',
      maxWidth: 900,
      '& h2': {
        textAlign: 'center'
      },
    },
  }
};
