import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  innerContainer: SxProps;
  footer: SxProps;
};

export default function useStyles(props: { margin: number, forPrint: boolean }): Style {
  const padding = `${props.margin / 2}in`;

  return {
    root: {
      width: '95%',
      maxWidth: "8.5in", // replicate printer paper at full size
      minHeight: "11in",
      mx: "auto",
      display: 'flex',
      flexDirection: 'column',
    },
    innerContainer: {
      width: props.forPrint ? '8.5in' : '100%',
      height: props.forPrint ? '10.8in' : undefined,
      overflow: props.forPrint ? 'hidden' : undefined,
      p: padding // provides page margins
    },
    footer: {
      width: '100%',
      mt: 2,
      textAlign: 'center',
      color: "secondary.main"
    }
  }
};
