import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  container: SxProps;
  categorySelector: SxProps;
  searchbar: SxProps;
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
      '& h2': {
        textAlign: 'center'
      }
    },
    categorySelector: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mt: 2
    },
    searchbar: {
      mt: 2,
      width: '100%',
      maxWidth: 600,
    }
  }
};
