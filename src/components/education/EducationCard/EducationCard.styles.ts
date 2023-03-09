import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  degreeDetails: SxProps;
  city: SxProps;
  logoContainer: SxProps;
  certLogoContainer: SxProps;
  certUrlContainer: SxProps;
  certTitle: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      m: 1,
      p: 2,
      display: "flex",
      flexDirection: 'column',
      alignItems: 'center',
      width: '95%',
      minWidth: 300,
      maxWidth: 800,
      textAlign: "center"
    },
    city: {
      my: 1,
      color: 'text.secondary'
    },
    degreeDetails: {
      display: "flex",
      width: '100%',
      justifyContent: 'space-evenly',
      my: 1,
      "& .MuiBox-root": {
        mx: 2,
        '& span': {
          color: 'text.secondary'
        }
      }
    },
    logoContainer: {
      width: '40%',
      maxWidth: 200,
      p: 1,
      '& img': {
        borderRadius: '10%',
        width: '100%',
      }
    },
    certLogoContainer: {
      width: '50%',
      p: 1,
      borderRadius: '5%',
      '& img': {
        width: '100%',
        my: 'auto'
      }
    },
    certUrlContainer: {
      width: '100%',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '& img': {
        width: '100%',
        borderRadius: 3
      },
      "& .MuiTypography-root": {
        mb: 2
      }
    },
    certTitle: {
      my: 1
    }
  }
};
