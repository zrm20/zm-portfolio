import { CSSProperties } from "react"
import { SxProps } from "@mui/material";

interface Style {
  root: CSSProperties;
  content: CSSProperties;
  footer: CSSProperties;
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
  },
  footer: {
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    justifyContent: 'center'
  }
};

export default styles;