import { SxProps } from "@mui/material";
import { display } from "@mui/system";

interface Style {
  root: SxProps;
  footer: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      '& p': {
        mt: 1,
        color: 'text.secondary',
        fontSize: '.75rem'
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    footer: {
      textAlign: 'center',
      color: 'text.secondary'
    }
  }
};
