import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

interface Style {
  root: SxProps;
  logo: CSSProperties;
  company: SxProps;
  titles: SxProps;
  dates: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      mx: 1,
      minWidth: 300,
      maxWidth: 500,
      '& .MuiCardContent-root': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    },
    logo: {
      width: '50%',
      borderRadius: 10
    },
    company: {
      my: 1
    },
    titles: {
      width: '100%',
      mb: 1,
      justifyContent: 'center',
      alignItems: 'center',
      "& .MuiTypography-root": {
        textAlign: 'center',
        mx: 1
      }
    },
    dates: {
      width: '100%',
      mb: 1,
      justifyContent: 'space-between'
    }
  }
};
