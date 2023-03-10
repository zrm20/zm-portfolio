import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  backdrop: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      width: '100%',
      '& form': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiFormControl-root': {
          width: '100%',
          mb: 2
        },
        '& .captcha-root div div': {
          mx: 'auto'
        },
        "& .MuiButton-root": {
          mt: 2,
        }
      }
    },
    backdrop: { 
      zIndex: 200
    }
  }
};
