import React from "react";
import { IconButton, IconButtonProps } from "@mui/material";
import { Link } from "react-router-dom";

interface IconLinkProps extends IconButtonProps {
 to: string;
};

export default function IconLink(props: IconLinkProps): JSX.Element {

  return (
    <IconButton component={Link} {...props as any}>
      {props.children}
    </IconButton>
  );
};
