import { ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SkillItem from "../SkillItem/SkillItem";
import useStyles from "./SkillListItem.styles";

interface SkillListItemProps {
  skill: Skill;
};

export default function SkillListItem(props: SkillListItemProps): JSX.Element {
  const styles = useStyles();
  const { skill } = props;

  return (
    <ListItem sx={styles.root}>
      <ListItemButton component={Link} to={`/skills/${skill.id}`}>
        <ListItemAvatar>
          <SkillItem skill={skill} size={50} hideLabel />
        </ListItemAvatar>
        <ListItemText primary={skill.name} />
      </ListItemButton>
    </ListItem>
  );
};
