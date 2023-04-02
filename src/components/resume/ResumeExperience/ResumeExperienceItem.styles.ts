import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  title: SxProps;
  dates: SxProps;
  description: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    title: {
    },
    dates: {
      color: 'text.secondary'
    },
    description: {
      color: 'text.secondary'
    }
  }
};
