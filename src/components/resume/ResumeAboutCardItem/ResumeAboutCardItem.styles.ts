import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  header: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      color: 'text.secondary',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      m: 1 / 2,
      '& .MuiDivider-root': {
        my: 1
      },
      '& .MuiCardContent-root': {
        p: 1,
      },
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      '& i': {
        mr: 2,
        color: 'primary.main'
      }
    }
  }
};
