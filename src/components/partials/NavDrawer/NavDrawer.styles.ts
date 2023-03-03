import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  container: SxProps;
  titleContainer: SxProps;
};

export default function useStyles(styleProp: { width: number }): Style {
  const { width } = styleProp;

  return {
    root: {
      display: {
        xs: "block",
        md: "none"
      }
    },
    container: {
      width,
    },
    titleContainer: {
      display: 'flex',
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      py: 1
    }
  }
};
