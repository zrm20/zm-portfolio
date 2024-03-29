import React, { CSSProperties } from "react";
import { Box, Typography } from "@mui/material";
import "devicon"

import useStyles from "./SkillItem.styles";
import { Link } from "react-router-dom";

interface SkillItemProps {
  skill: Skill;
  size?: number;
  iconStyle?: CSSProperties;
  textStyle?: CSSProperties;
  hideLabel?: boolean;
  noLink?: boolean;
};

export default function SkillItem(props: SkillItemProps): JSX.Element {
  const {
    skill,
    size = 100,
  } = props;
  const styles = useStyles({ size });

  return (
    <Box sx={styles.root} component={!props.noLink ? Link : 'div'} to={`/skills/${skill.id}`}>
      <Box sx={styles.iconContainer}>
        <i className={skill.icon} />
      </Box>

      {
        !props.hideLabel &&
        <Typography sx={styles.text} variant="caption">{skill.name}</Typography>
      }
    </Box>
  );
};
