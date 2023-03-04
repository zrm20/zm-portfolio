import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

interface Style {
  root: SxProps;
  tabs: SxProps;
  list: SxProps;
  transitionContainer: CSSProperties;
};

export default function useStyles(): Style {

  return {
    root: {
      width: '100%'
    },
    tabs: {
      width: '100%',
      mb: 1,
      '& .MuiTabs-flexContainer': {
        overflowX: 'scroll'
      }
    },
    list: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    transitionContainer: {
    }
  }
};
