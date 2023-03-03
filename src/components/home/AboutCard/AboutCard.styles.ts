import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

interface Style {
  root: SxProps;
  image: CSSProperties;
  text: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      width: '100%',
      maxWidth: 500,
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      width: '50%',
      borderRadius: '50%'
    },
    text: {
      textAlign: 'center',
      mt: 2
    }
  }
};
