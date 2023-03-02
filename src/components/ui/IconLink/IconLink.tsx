import React from "react";
import { IconButton, IconButtonProps } from "@mui/material";
import { LinkProps } from "react-router-dom";

type IconLinkProps = IconButtonProps & LinkProps;

export default function IconLink(props: IconLinkProps): JSX.Element {

  return (
    <IconButton {...props}>
      {props.children}
    </IconButton>
  );
};
