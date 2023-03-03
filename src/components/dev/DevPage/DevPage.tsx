import React from "react";
import { Box } from "@mui/material";

import useStyles from "./DevPage.styles";
import { useUpdateTitle } from "../../../hooks";

interface DevPageProps {

};

export default function DevPage(props: DevPageProps): JSX.Element {
  const styles = useStyles();
  useUpdateTitle("ZM - Software")

  return (
    <Box sx={styles.root} >
      DEV
    </Box>
  );
};
