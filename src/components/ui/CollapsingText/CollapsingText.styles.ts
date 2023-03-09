import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& .MuiTypography-root': {
        mb: 1
      },
      '& .MuiIconButton-root': {
        color: 'text.secondary'
      }
    },
  }
};
