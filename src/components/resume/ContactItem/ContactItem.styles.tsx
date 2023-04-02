import { SxProps } from "@mui/material";

interface Style {
  root: SxProps;
};

export default function useStyles(): Style {

  return {
    root: {
      fontSize: {
        xs: '1rem',
        sm: '.8rem'
      },
      '& i': {
        ml: 1,
        color: "text.secondary"
      } 
    }
  };
};
