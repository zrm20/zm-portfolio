import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  footer: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
    },
    footer: {
      color: 'text.secondary',
      textAlign: 'center'
    }
  }
};
