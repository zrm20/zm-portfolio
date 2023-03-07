import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  cardScroller: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& .MuiToggleButtonGroup-root': {
        mb: 1
      }
    },
    cardScroller: {
      display: 'flex',
      width: '100%',
      overflowX: "scroll"
    }
  }
};
