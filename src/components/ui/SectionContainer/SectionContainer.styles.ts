import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  title: SxProps;
  container: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      width: '100%',
      mb: 2
    },
    title: {
      textAlign: 'center',
      mb: 1
    },
    container: {
      mt: 1
    }
  }
};
