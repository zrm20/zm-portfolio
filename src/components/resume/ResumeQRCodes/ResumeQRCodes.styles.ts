import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

interface Style {
  root: SxProps;
  websiteContainer: SxProps;
  website: SxProps;
  qrCode: CSSProperties;
  textContainer: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      
    },
    websiteContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-evenly',
      my: 1
    },
    website: {
      border: 2,
      borderRadius: 1,
      px: 1,
      borderColor: 'primary.main',
      '& p': {
        textAlign: 'center'
      },

    },
    qrCode: {
      width: 100,
      height: 100,
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }
  }
};
