import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  fab: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      width: '100%',
      flex: 1,
      py: 2
    },
    fab: {
      position: 'fixed',
      bottom: 30,
      right: 30
    }
  }
};
