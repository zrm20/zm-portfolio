import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  section: SxProps;
  scrollContainer: SxProps;
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
    section: {
      width: '100%',
      maxWidth: 800
    },
    scrollContainer: {
      width: '100%',
      display: "flex",
      overflowX: "scroll"
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
    }
  }
};
