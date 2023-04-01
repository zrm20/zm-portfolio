import { Box, Link, LinkProps } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

import useStyles from "./ContactItem.styles";

interface ContactItemProps extends LinkProps {
  iconClass: string;
  href: string;
  title: string;
};

export default function ContactItem(props: ContactItemProps): JSX.Element {
  const styles = useStyles();
  const { iconClass, href, title, ...rest } = props;

  return (
    <Box component="span" sx={styles.root}>
      <Link href={href} target="_blank" {...rest}>{title}</Link>
      <i className={iconClass} />
    </Box>
  );
};
