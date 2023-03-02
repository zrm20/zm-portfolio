import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  copyright: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      py: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    copyright: {
      mx: 2
    }
  }
};
