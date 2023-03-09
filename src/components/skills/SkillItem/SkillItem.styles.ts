import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  text: SxProps;
  iconContainer: SxProps
};

export default function useStyles(styleProps: { size: number }): Style {
  const { size } = styleProps;

  const fontMultiplier = .0075 * size; // in REM
  const iconMultiplier = .035 * size; // in REM

  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      m: 1,
      color: "text.primary",
      textDecoration: 'none'
    },
    iconContainer: {
      width: size,
      height: size,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: 1,
      borderColor: "primary.main",
      borderRadius: '50%',
      '& i': {
        fontSize: `${iconMultiplier}rem`
      }
    },
    text: {
      mt: 1,
      fontSize: `${fontMultiplier}rem`
    }
  }
};
