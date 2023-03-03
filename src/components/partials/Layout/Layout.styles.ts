import { CSSProperties } from "react"
import { SxProps } from "@mui/material";

interface Style {
  root: CSSProperties;
  content: SxProps;
};

const styles: Style = {
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    width: '100%',
    flex: 1,
  }
};

export default styles;