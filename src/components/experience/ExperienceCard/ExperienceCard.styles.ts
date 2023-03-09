import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

interface Style {
  root: SxProps;
  logo: CSSProperties;
  company: SxProps;
  titles: SxProps;
  dates: SxProps;
  detailsBtn: SxProps;
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
        alignItems: 'center',
        '& a': {
          width: '50%',
        }
      }
    },
    logo: {
      width: '100%',
      borderRadius: 10
    },
    company: {
      my: 1
    },
    titles: {
      width: '100%',
      mb: 1,
      display: 'flex',
      flexWrap: "wrap",
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
    },
    detailsBtn: {
      position: "absolute",
      right: 10,
      '& svg': {
        color: 'text.secondary',
        fontSize: '2rem'
      }
    }
  }
};
