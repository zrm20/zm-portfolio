import { createTheme } from "@mui/material";

const theme = createTheme(
  {
    palette: {
      mode: 'light',
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
        fontWeight: 500,
        fontSize: '1.5rem',
      },
      h2: {
        fontFamily: 'Aboreto',
        fontWeight: 500,
        fontSize: '1.25rem',
      },
      h3: {
        fontFamily: 'Aboreto',
        fontWeight: 500,
        fontSize: '1rem',
      },
      h4: {
        fontFamily: 'Aboreto',
        fontWeight: 500,
        fontSize: '.9rem',
      },
      h5: {
        fontSize: '.8rem',
        fontFamily: 'Aboreto',
      },
      h6: {
        fontSize: '.7rem',
        fontFamily: 'Aboreto',
      },
      subtitle1: {
        fontFamily: 'Nunito',
        fontSize: '.8rem',
      },
      subtitle2: {
        fontSize: '.7rem',
        fontFamily: 'Nunito',
      },
      body1: {
        fontSize: '.75rem',
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
        fontSize: '.7rem'
      },
    },
  }
);

export default theme;