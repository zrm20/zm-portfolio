import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      py: 2
    },
  }
};
