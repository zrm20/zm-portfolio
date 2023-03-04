import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  li: SxProps;
  collapse: SxProps;
  listControl: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      width: '100%',
      maxWidth: 500
    },
    li: {

    },
    collapse: {
      display: 'flex'
    },
    listControl: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  }
};
