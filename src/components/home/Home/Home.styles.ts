import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  section: SxProps;
  sectionTitle: SxProps;
  scrollContainer: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      py: 2
    },
    section: {
      width: '100%',
      maxWidth: 800
    },
    sectionTitle: {
      width: '100%',
      textAlign: 'center',
      mt: 2
    },
    scrollContainer: {
      width: '100%',
      display: "flex",
      overflowX: "scroll"
    }
  }
};
