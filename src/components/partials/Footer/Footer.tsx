import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

import useStyles from "./Footer.styles";
import { GITHUB_URL, LINKEDIN_URL } from "../../../constants/urls";

interface FooterProps {

};

export default function Footer(props: FooterProps): JSX.Element {
  const styles = useStyles();

  return (
    <Box sx={styles.root} component="footer">
      <IconButton component="a" href={GITHUB_URL}>
        <GitHub />
      </IconButton>

      <Typography sx={styles.copyright}>{'\u00A9'} Zach McCoy</Typography>

      <IconButton component="a" href={LINKEDIN_URL}>
        <LinkedIn />
      </IconButton>
    </Box>
  );
};
