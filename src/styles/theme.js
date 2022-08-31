import { createTheme } from "@mui/material";

const theme = createTheme(
  {
    palette: {
      mode: 'dark',
      primary: {
        main: '#ef6c00',
      },
      secondary: {
        main: '#00bcd4',
      },
    },
    typography: {
      h1: {
        fontFamily: 'Aboreto',
        fontWeight: 600,
        fontSize: '3rem',
      },
      h2: {
        fontFamily: 'Aboreto',
        fontWeight: 600,
        fontSize: '2.5rem',
      },
      h3: {
        fontFamily: 'Aboreto',
        fontWeight: 600,
        fontSize: '2rem',
      },
      h4: {
        fontFamily: 'Aboreto',
        fontWeight: 600,
        fontSize: '1.75rem',
      },
      h5: {
        fontFamily: 'Aboreto',
      },
      h6: {
        fontFamily: 'Aboreto',
      },
      subtitle1: {
        fontFamily: 'Nunito',
        fontSize: '1.1rem',
      },
      subtitle2: {
        fontFamily: 'Nunito',
      },
      body1: {
        fontFamily: 'Nunito',
      },
      button: {
        fontFamily: 'Nunito',
      },
      body2: {
        fontFamily: 'Nunito',
      },
      overline: {
        fontFamily: 'Nunito',
      },
      caption: {
        fontFamily: 'Nunito',
      },
    },
  }
);

export default theme;