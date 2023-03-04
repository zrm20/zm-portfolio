import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  li: SxProps;
  collapse: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {

    },
    li: {

    },
    collapse: {
      display: 'flex'
    }
  }
};
