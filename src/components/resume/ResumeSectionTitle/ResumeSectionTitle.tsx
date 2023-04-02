import React from "react";
import { Divider, SxProps, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface ResumeSectionTitleProps {
  children: string;
  to: string;
};

export default function ResumeSectionTitle(props: ResumeSectionTitleProps): JSX.Element {
  return (
    <>
      <Typography variant="h2" sx={style} component={RouterLink} to={props.to} >
        {props.children}
      </Typography>
      <Divider sx={{ mx: 1 }} />
    </>
  );
};

const style: SxProps = {
  ml: 2,
  width: '100%',
  color: 'text.secondary',
  textDecoration: 'none'
};