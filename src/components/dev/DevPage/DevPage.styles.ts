import { SxProps, useTheme } from "@mui/material";
import { CODE_BACKGROUND_IMG } from "../../../constants/imageUrls";
import chroma from "chroma-js";

interface Style {
  root: SxProps;
  container: SxProps;
  title: SxProps;
  links: SxProps;
};

export default function useStyles(): Style {
  const { palette } = useTheme();

  return {
    root: {
      flex: 1,
      backgroundImage: `url(${CODE_BACKGROUND_IMG})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundBlendMode: "overlay",
      scrollBehavior: "smooth"
    },
    container: {
      mx: 'auto',
      mt: 2,
      width: '95%',
      maxWidth: 900,
      bgcolor: chroma(palette.background.paper).alpha(.8).hex(),
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    title: {
      textAlign: 'center',
      mb: 1
    },
    links: {
      width: '100%',
      justifyContent: 'space-evenly',
      '& a': {
        color: "text.secondary",
        textDecoration: "none",
      }
    }
  }
};
