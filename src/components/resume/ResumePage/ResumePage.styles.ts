import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  fab: SxProps;
  toggleButtons: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      width: '100%',
      flex: 1,
      py: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    fab: {
      position: 'fixed',
      bottom: 30,
      right: 30
    },
    toggleButtons: {
      mb: 2,
    }
  }
};
