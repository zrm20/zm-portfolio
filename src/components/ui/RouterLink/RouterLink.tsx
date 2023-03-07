import React from "react";
import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from "react-router-dom";
import { Link, LinkBaseProps } from "@mui/material";

type RouterLinkProps = LinkBaseProps & ReactRouterLinkProps;

export default function RouterLink(props: RouterLinkProps): JSX.Element {
  return (
    <Link {...props} component={ReactRouterLink}>
      {props.children}
    </Link>
  )
}