import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  skillsContainer: SxProps;
  footer: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    skillsContainer: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      '& i': {
        color: 'text.secondary'
      }
    },
    footer: {
      textAlign: 'center',
      color: 'text.secondary'
    }
  }
};
