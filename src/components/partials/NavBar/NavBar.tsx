import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Link,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import { v4 as uuid } from "uuid";
import { ExpandMore } from "@mui/icons-material";

import useStyles from "./NavBar.styles";
import zmLogo from "../../../assets/images/zm_logo_orange_white_name.PNG";
import { ZMTitle } from "../../ui";
import { primaryLinks, secondaryLinks } from "../../../navigation";

interface NavBarProps {
  toggleDrawer(): void;
  isMobileView: boolean;
};

export default function NavBar(props: NavBarProps): JSX.Element {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
                primaryLinks.map(link => {
                  const buttonProps = link.isExternalLink ?
                    { component: "a", href: link.to } :
                    { component: RouterLink, to: link.to };

                  return (
                    <Link {...buttonProps} key={uuid()} underline="hover" >
                      {link.label}
                    </Link>
                  )
                })
              }
              {
                secondaryLinks.length > 0 &&
                <>
                  <Button
                    sx={styles.navLink}
                    endIcon={<ExpandMore />}
                    id="secondary-links"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    aria-controls={open ? 'secondary-linkks' : undefined}
                    onClick={handleClick}
                  >
                    More
                  </Button>
                  <Menu
                    id="secondary-links"
                    aria-labelledby="secondary-links"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                  >
                    {
                      secondaryLinks.map(link => {
                        const buttonProps = link.isExternalLink ?
                          { component: "a", href: link.to } :
                          { component: RouterLink, to: link.to };

                        return (
                          <MenuItem {...buttonProps} key={uuid()} onClick={handleClose} >
                            {link.label}
                          </MenuItem>
                        )
                      })
                    }
                  </Menu>
                </>
              }
            </>
          }
        </Box>
        {
          props.isMobileView &&
          <IconButton onClick={props.toggleDrawer}>
            <MenuIcon />
          </IconButton>
        }
      </Toolbar>
    </AppBar>
  );
};
