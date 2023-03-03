import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      color: "text.primary",
      textDecoration: "none",
      '& sup': {
        color: "primary.main"
      }
    },
  }
};