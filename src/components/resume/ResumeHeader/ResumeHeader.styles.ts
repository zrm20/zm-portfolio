import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  avatar: SxProps;
  textContainer: SxProps;
  contactContainer: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      display: 'flex',
      flexDirection: {
        xs: "column",
        sm: "row"
      },
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    avatar: {
      height: 100,
      width: 100,
      mb: {
        xs: 1,
        sm: 0
      }
    },
    textContainer: {
      display: 'flex',
      flexDirection: "column",
      ml: {
        xs: 0,
        sm: 2
      },
      alignItems: {
        xs: "center",
        sm: 'flex-start'
      },
      textAlign: {
        xs: 'center',
        sm: 'start'
      },
      '& h1': {
        mb: 1,
      },
      '& h3': {
        color: 'text.secondary',
        mb: 1
      },
      mb: {
        xs: 1,
        sm: 0
      }
    },
    contactContainer: {
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: {
        xs: 'center',
        sm: 'flex-end'
      }
    }
  }
};
