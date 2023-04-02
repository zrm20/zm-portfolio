import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      '& p': {
        mt: 1,
        color: 'text.secondary',
        fontSize: '.75rem'
      }
    },
  }
};
