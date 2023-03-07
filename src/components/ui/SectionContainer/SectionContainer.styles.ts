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
      mb: 1,
      ml: 2,
      color: 'text.secondary'
    },
    container: {
      mt: 1
    }
  }
};
