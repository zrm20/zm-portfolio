import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
  imgContainer: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      minWidth: 300,
      maxWidth: 500,
      mx: 1,
      '& .MuiCardContent-root': {
        pb: 0
      },
      '& .MuiCardHeader-action': {
        my: 'auto',
        '& svg': {
          color: 'text.secondary'
        }
      }
    },
    imgContainer: {
      objectFit: 'contain'
    }
  }
};
