import React, { useState } from "react";
import { Box, Collapse, CollapseProps, IconButton, IconButtonProps, SxProps, Typography, TypographyProps } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { v4 as uuid } from "uuid";

import { logEvent } from "../../../config/firebaseConfig";
import useStyles from "./CollapsingText.styles";

interface CollapsingTextProps extends CollapseProps {
  children: string | string[]
  collapsedSize?: number;
  unhiddenText?: string;
  analyticsId?: string;
  sx?: SxProps;
  textProps?: TypographyProps;
  unhiddenTextProps?: TypographyProps;
  collapseProps?: CollapseProps;
  buttonProps?: IconButtonProps;
};

export default function CollapsingText(props: CollapsingTextProps): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const styles = useStyles();
  const { unhiddenText } = props;

  function toggleCollapse(): void {
    if(isCollapsed) {
      logEvent("text_expand", { id: props.analyticsId })
    };
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box sx={props.sx || styles.root}>
      {
        Boolean(unhiddenText) &&
        <Typography {...props.textProps} {...props.unhiddenTextProps}>
          {unhiddenText}{isCollapsed ? "...": null}
        </Typography>
      }
      <Collapse 
        in={!isCollapsed} 
        collapsedSize={props.collapsedSize}
        {...props.collapseProps}
      >
        {
          typeof props.children === "string" ?
          <Typography {...props.textProps}>{props.children}</Typography> :
          props.children.map(p => <Typography {...props.textProps} key={uuid()}>{p}</Typography>)
        }
      </Collapse>
      <IconButton onClick={toggleCollapse} {...props.buttonProps}>
        {
          isCollapsed ?
          <ExpandMore /> :
          <ExpandLess />
        }
      </IconButton>
    </Box>
  );
};
