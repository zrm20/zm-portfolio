import React from "react";
import { IconButton, IconButtonProps, LinkProps } from "@mui/material";
import { Link } from "react-router-dom";

type IconLinkProps = IconButtonProps & LinkProps;

export default function IconLink(props: IconLinkProps): JSX.Element {

  return (
    <IconButton component={Link} {...props as any}>
      {props.children}
    </IconButton>
  );
};
