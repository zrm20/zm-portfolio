import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  pageStack: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      width: '100%',
    },
    pageStack: {
      flexDirection: "row",
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }
};
