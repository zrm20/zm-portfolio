import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  container: SxProps;
  titleContainer: SxProps;
  bottomLinks: SxProps;
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
      height: '100%',
      width,
      display: 'flex',
      flexDirection: 'column'
    },
    titleContainer: {
      display: 'flex',
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      py: 1
    },
    bottomLinks: {
      mt: 'auto',
      mb: 1,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly'
    }
  }
};
