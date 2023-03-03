import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  tabs: SxProps;
  container: SxProps;
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
    container: {
      justifyContent: 'center'
    }
  }
};
