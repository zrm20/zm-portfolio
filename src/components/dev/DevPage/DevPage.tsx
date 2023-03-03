import React from "react";
import { Box } from "@mui/material";

import useStyles from "./DevPage.styles";

interface DevPageProps {

};

export default function DevPage(props: DevPageProps): JSX.Element {
  const styles = useStyles();

  return (
    <Box sx={styles.root} >
      DEV
    </Box>
  );
};
