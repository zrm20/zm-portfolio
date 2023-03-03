import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Link,
  IconButton
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Menu } from "@mui/icons-material"

import useStyles from "./NavBar.styles";
import zmLogo from "../../../assets/images/zm_logo_orange_white_name.PNG";
import { ZMTitle } from "../../ui";
import { navLinks } from "../../../navigation";

interface NavBarProps {
  toggleDrawer(): void;
  isMobileView: boolean;
};

export default function NavBar(props: NavBarProps): JSX.Element {
  const styles = useStyles();

  return (
    <AppBar position='static' >
      <Toolbar sx={styles.root} component="nav">
        <Box component={RouterLink} to='/' sx={styles.logoContainer}>
          <img src={zmLogo} alt='ZM Logo' style={styles.logo} />
        </Box>

        {
          !props.isMobileView &&
          <ZMTitle />
        }

        <Box sx={styles.linkContainer}>
          {
            !props.isMobileView &&
            <>
              {
                navLinks.map((link, i) => {
                  const buttonProps = link.isExternalLink ?
                    { component: "a", href: link.to } :
                    { component: RouterLink, to: link.to };

                  return (
                    <Link {...buttonProps} key={i} underline="hover" >
                      {link.label}
                    </Link>
                  )
                })
              }
            </>
          }
        </Box>
        {
          props.isMobileView &&
          <IconButton onClick={props.toggleDrawer}>
            <Menu />
          </IconButton>
        }
      </Toolbar>
    </AppBar>
  );
};
