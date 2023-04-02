import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

interface Style {
  root: SxProps;
  list: SxProps;
  personalSkillsList: SxProps;
  qrContainer: SxProps;
  qrCode: CSSProperties;
};

export default function useStyles(): Style {

  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    list: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      maxWidth: 350,
      mx: 'auto'
    },
    personalSkillsList: {
      p: 0,
      '& .MuiListItem-root': {
        fontSize: '.8rem',
        p: .25
      }
    },
    qrContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& .MuiLink-root': {
        mt: .5,
        fontSize: '.75rem'
      }
    },
    qrCode: {
      width: 100,
      height: 100
    }
  }
};
