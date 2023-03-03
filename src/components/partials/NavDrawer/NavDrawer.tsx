import React from "react";
import { SwipeableDrawer, Box, List, ListItemButton, Divider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import useStyles from "./NavDrawer.styles";
import { ZMTitle } from "../../ui";
import { navLinks } from "../../../navigation";

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
          <ZMTitle />
        </Box>

        <Divider />
        <List component="nav">
          {
            navLinks.map((link, i) => {
              const buttonProps = link.isExternalLink ?
                { component: "a", href: link.to } :
                { component: RouterLink, to: link.to };

              return (
                <ListItemButton {...buttonProps} key={i} onClick={props.toggleDrawer}>
                  {link.label}
                </ListItemButton>
              )
            })
          }
        </List>
      </Box>
    </SwipeableDrawer>
  )
};
