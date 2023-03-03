import { CSSProperties } from "react";
import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  logoContainer: SxProps;
  logo: CSSProperties;
  linkContainer: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      justifyContent: 'space-between',
      maxWidth: 1000,
      width: '100%',
      ml: 'auto',
      mr: 'auto',
      height: 70
    },
    logoContainer: {
      height: '100%',
      justifyContent: 'center',
      mr: 2
    },
    logo: {
      height: '95%'
    },
    linkContainer: {
      ml: 2,
      flex: 1,
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    }
  }
};
