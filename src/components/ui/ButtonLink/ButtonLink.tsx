import React from "react";
import { ButtonProps, Button } from "@mui/material";
import { LinkProps } from "react-router-dom";


type ButtonLinkProps = ButtonProps & LinkProps;

export default function ButtonLink(props: ButtonLinkProps): JSX.Element {
  return (
    <Button {...props}>
      {props.children}
    </Button>
  );
};
