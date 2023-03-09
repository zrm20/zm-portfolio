import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  container: SxProps;
  errorContainer: SxProps;
  imgContainer: SxProps;
  backButton: SxProps;
  aboutText: SxProps;
  skillsSection: SxProps;
  projectsSection: SxProps;
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
      textAlign: 'center',
      '& h2': {
        mb: 2
      },
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
    imgContainer: {
      width: '75%',
      '& img': {
        width: '100%'
      }
    },
    backButton: {
      position: "fixed",
      bottom: 10,
      zIndex: 100
    },
    aboutText: {
      textAlign: 'left'
    },
    skillsSection: {
      display: "flex",
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    projectsSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
};
