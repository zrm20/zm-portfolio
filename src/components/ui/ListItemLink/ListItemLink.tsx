import React from "react";
import { ListItemButton, ListItemButtonProps } from "@mui/material";
import { LinkProps, Link } from "react-router-dom";


type ListItemLinkProps = ListItemButtonProps & LinkProps;

export default function ListItemLink(props: ListItemLinkProps): JSX.Element {
  return (
    <ListItemButton component={Link} {...props as any}>
      {props.children}
    </ListItemButton>
  );
};
