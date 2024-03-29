import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

interface Style {
  root: SxProps;
  image: CSSProperties;
  title: SxProps;
  links: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      width: '100%',
      maxWidth: 600,
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
    title: {
      mt: 2
    },
    links: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-evenly',
      my: 1
    }
  }
};
