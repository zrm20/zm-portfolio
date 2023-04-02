import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  innerContainer: SxProps
};

export default function useStyles(props: { margin: number }): Style {
  const padding = `${props.margin / 2}in`;

  return {
    root: {
      width: '95%',
      maxWidth: "8.5in", // replicate printer paper at full size
      minHeight: "11in",
      mx: "auto",
      display: 'flex',
      flexDirection: 'column'
    },
    innerContainer: {
      width: '100%',
      p: padding // provides page margins
      
    }
  }
};
