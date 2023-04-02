import React from "react";
import { Card, CardContent, Box, Typography, Divider } from "@mui/material";

import useStyles from "./ResumeAboutCardItem.styles";

interface ResumeAboutCardItemProps {
  iconClass: string;
  title: string;
  children?: string | JSX.Element | JSX.Element[]
};

export default function ResumeAboutCardItem(props: ResumeAboutCardItemProps): JSX.Element {
  const styles = useStyles();

  return (
    <Card sx={styles.root} variant="outlined" component="li">
      <CardContent>
        <Box sx={styles.header}>
          <i className={props.iconClass} />
          <Typography variant="h4">{props.title}</Typography>
        </Box>
        {
          Boolean(props.children) &&
          <>
            <Divider />
            <Box sx={styles.childrenContainer}>
              { props.children }
            </Box>
          </>
        }
      </CardContent>
    </Card>
  );
};
