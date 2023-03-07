import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      width: '100%',
      justifyContent: 'center',
      overflowX: "scroll",
      flexDirection: 'row',
    },
  }
};
