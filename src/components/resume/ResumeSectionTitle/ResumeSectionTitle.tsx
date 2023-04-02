import React from "react";
import { Divider, SxProps, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface ResumeSectionTitleProps {
  children: string;
  to: string;
  center?: boolean;
};

export default function ResumeSectionTitle(props: ResumeSectionTitleProps): JSX.Element {
  const style: SxProps = {
    ml: 2,
    display: 'block',
    color: 'text.secondary',
    textDecoration: 'none',
    textAlign: props.center ? "center" : "start",
  };

  return (
    <>
      <Typography variant="h2" sx={style} component={RouterLink} to={props.to} >
        {props.children}
      </Typography>
      <Divider sx={{ mx: 1 }} />
    </>
  );
};
