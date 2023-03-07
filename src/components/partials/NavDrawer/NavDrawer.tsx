import React from "react";
import { SwipeableDrawer, Box, List, ListItemButton, Divider, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { v4 as uuid } from "uuid";

import useStyles from "./NavDrawer.styles";
import { ZMTitle } from "../../ui";
import { primaryLinks, secondaryLinks } from "../../../navigation";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { GITHUB_URL, LINKEDIN_URL } from "../../../constants/urls";

interface NavDrawerProps {
  open: boolean;
  toggleDrawer(): void;
};

export default function NavDrawer(props: NavDrawerProps): JSX.Element {
  const drawerWidth: number = 240;
  const styles = useStyles({ width: drawerWidth });

  return (
    <SwipeableDrawer
      anchor="right"
      open={props.open}
      onClose={props.toggleDrawer}
      onOpen={props.toggleDrawer}
      sx={styles.root}
    >
      <Box sx={styles.container}>
        <Box sx={styles.titleContainer}>
          <ZMTitle onClick={props.toggleDrawer}/>
        </Box>

        <Divider />
        <List component="nav">
          {
            primaryLinks.map((link, i) => {
              const buttonProps = link.isExternalLink ?
                { component: "a", href: link.to } :
                { component: RouterLink, to: link.to };

              return (
                <ListItemButton {...buttonProps} key={uuid()} onClick={props.toggleDrawer}>
                  {link.label}
                </ListItemButton>
              )
            })
          }
          <Divider />
          {
            secondaryLinks.map((link, i) => {
              const buttonProps = link.isExternalLink ?
                { component: "a", href: link.to } :
                { component: RouterLink, to: link.to };

              return (
                <ListItemButton {...buttonProps} key={uuid()} onClick={props.toggleDrawer}>
                  {link.label}
                </ListItemButton>
              )
            })
          }
        </List>
        <Box sx={styles.bottomLinks}>
          <IconButton href={LINKEDIN_URL} target="_blank" >
            <LinkedIn />
          </IconButton>
          <IconButton href={GITHUB_URL} target="_blank" >
            <GitHub />
          </IconButton>
        </Box>
      </Box>
    </SwipeableDrawer>
  )
};
