import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  errorContainer: SxProps;
  container: SxProps;
  backButton: SxProps;
  icon: SxProps;
  listContainer: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      width: '100%',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    errorContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      mt: 2,
      "& svg": {
        fontSize: '3.5rem',
        my: 2
      },
      "& .MuiButton-root": {
        my: 2
      }
    },
    container: {
      textAlign: 'center',
      p: 2,
      mt: 2,
      width: '95%',
      maxWidth: 800,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    backButton: {
      position: "fixed",
      bottom: 10,
      zIndex: 100
    },
    icon: {
      mt: 1,
      mb: 2,
      borderWeight: 1,
      borderStyle: 'solid',
      borderColor: 'primary.main',
      p: 3,
      borderRadius: '50%',
      "& i": {
        fontSize: '4rem',
      }
    },
    listContainer: {
      maxWidth: 600,
      mx: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
};
