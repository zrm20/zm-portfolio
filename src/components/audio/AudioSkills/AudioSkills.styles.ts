import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  pageStack: SxProps;
  list: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      width: '100%',
      maxWidth: 500,
      mx: 'auto'
    },
    pageStack: {
      flexDirection: "row",
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    list: {
      width: '100%',
      '& .MuiListItem-root': {
        textAlign: 'center'
      }
    }
  }
};
