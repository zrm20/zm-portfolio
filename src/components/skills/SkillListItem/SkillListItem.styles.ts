import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      width: '100%',
      borderBottom: 1,
      borderBottomColor: 'grey.800',
      '& .MuiListItemButton-root': {
        p: 0
      },
      '& .MuiListItemText-root': {
        my: 'auto'
      }
    },
  }
};
