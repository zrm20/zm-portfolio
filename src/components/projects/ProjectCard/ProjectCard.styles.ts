import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  cardActionLinks: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {

    },
    cardActionLinks: {
      width: '100%',
      justifyContent: 'center',
      overflowX: "scroll",
      flexDirection: 'row'
    }
  }
};
