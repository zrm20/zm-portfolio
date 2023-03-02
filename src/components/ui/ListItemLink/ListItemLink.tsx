import React from "react";
import { ListItemButton, ListItemButtonProps } from "@mui/material";
import { LinkProps } from "react-router-dom";


type ListItemLinkProps = ListItemButtonProps & LinkProps;

export default function ListItemLink(props: ListItemLinkProps): JSX.Element {
  return (
    <ListItemButton {...props}>
      {props.children}
    </ListItemButton>
  );
};
