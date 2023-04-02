import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  avatar: SxProps;
  textContainer: SxProps;
  contactContainer: SxProps;
};

export default function useStyles(props: { forPrint: boolean }): Style {
  const { forPrint } = props;
  return {
    root: {
      display: 'flex',
      flexDirection: {
        xs: !forPrint ? "column" : "row",
        sm: "row"
      },
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    avatar: {
      height: 100,
      width: 100,
      mb: {
        xs: !forPrint ? 1 : 0,
        sm: 0
      }
    },
    textContainer: {
      display: 'flex',
      flexDirection: "column",
      ml: {
        xs: !forPrint ? 0 : 2,
        sm: 2
      },
      alignItems: {
        xs: !forPrint ? "center" : 'flex-start',
        sm: 'flex-start'
      },
      textAlign: {
        xs: !forPrint ? 'center' : 'start',
        sm: 'start'
      },
      '& h1': {
        mb: 1,
        color: 'text.primary'
      },
      '& h3': {
        color: 'text.secondary',
        mb: 1
      },
      mb: {
        xs: !forPrint ? 1 : 0,
        sm: 0
      }
    },
    contactContainer: {
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: {
        xs: !forPrint ? 'center' : 'flex-end',
        sm: 'flex-end'
      }
    }
  }
};
