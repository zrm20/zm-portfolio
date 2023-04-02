import React from "react";
import { Divider, SxProps, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface ResumeSectionTitleProps {
  children: string;
  to: string | undefined;
  center?: boolean;
};

export default function ResumeSectionTitle(props: ResumeSectionTitleProps): JSX.Element {
  const style: SxProps = {
    mt: 1,
    ml: 2,
    display: 'block',
    color: 'text.secondary',
    textDecoration: 'none',
    textAlign: props.center ? "center" : "start",
  };

  const linkProps = 
  Boolean(props.to) ? 
  {
    component: RouterLink,
    to: props.to
  } : {};

  return (
    <>
      <Typography variant="h2" sx={style} {...linkProps}>
        {props.children}
      </Typography>
      <Divider sx={{ mx: 1 }} />
    </>
  );
};
