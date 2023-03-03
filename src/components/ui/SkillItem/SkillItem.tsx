import React, { CSSProperties } from "react";
import { Box, Typography } from "@mui/material";
import "devicon"

import useStyles from "./SkillItem.styles";

interface SkillItemProps {
  skill: Skill;
  size?: number;
  iconStyle?: CSSProperties;
  textStyle?: CSSProperties;
};

export default function SkillItem(props: SkillItemProps): JSX.Element {
  const {
    skill,
    size = 100,
  } = props;
  const styles = useStyles({ size });

  return (
    <Box sx={styles.root} >
      <Box sx={styles.iconContainer}>
        <i className={skill.icon} />
      </Box>

      <Typography sx={styles.text} variant="caption">{skill.name}</Typography>
    </Box>
  );
};
