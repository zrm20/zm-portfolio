import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  errorContainer: SxProps;
  container: SxProps;
  imgContainer: SxProps;
  description: SxProps;
  skillsSection: SxProps;
  backButton: SxProps;
  experienceSection: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      width: '100%',
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
    imgContainer: {
      width: '100%',
      maxWidth: 500,
      mt: 1,
      "& img": {
        width: '100%'
      }
    },
    description: {
      textAlign: 'left'
    },
    skillsSection: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      flexWrap: 'wrap'   
    },
    backButton: {
      position: "fixed",
      bottom: 10
    },
    experienceSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
};
