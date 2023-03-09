import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  logoContainer: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      maxWidth: 500,
      mx: 'auto',
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: "grey.800",
      '& .MuiListItemButton-root': {
        p: 0
      }
    },
    logoContainer: {
      mr: 1,
      '& img': {
        width: 50
      }
    }
  }
};
