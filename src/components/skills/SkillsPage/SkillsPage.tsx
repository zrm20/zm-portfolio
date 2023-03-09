import React, { useState } from "react";
import { Box, IconButton, List, Paper, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

import useStyles from "./SkillsPage.styles";
import { Close } from "@mui/icons-material";
import { FadeIn } from "../../animations";
import { getSkills } from "../../../database/Skills";
import SkillListItem from "../SkillListItem/SkillListItem";
import { useUpdateTitle } from "../../../hooks";

export default function SkillsPage(): JSX.Element {
  const [category, setCategory] = useState<SkillCategory | "All">("All");
  const [searchText, setSearchText] = useState<string>("");
  const styles = useStyles();
  const skills = getSkills();
  useUpdateTitle("ZM - Skills")

  function handleChangeCategory(evt: React.MouseEvent<HTMLElement, MouseEvent>, value: string): void {
    if(value === "All" || value === "Dev" || value === "Audio") {
      setCategory(value);
    };
  };

  function handleChangeSearchText(evt: React.ChangeEvent<HTMLInputElement>): void {
    setSearchText(evt.target.value);
  };

  function clearSearchText(): void {
    setSearchText('');
  };

  function filterCategory(skill: Skill): boolean {
    if(category === "All") {
      return true;
    };
    return skill.category === category;
  };

  function filterSearchText(skill: Skill): boolean {
    if(!searchText) {
      return true;
    };
    return skill.name.toLowerCase()
      .includes(searchText.toLowerCase());
  };

  return (
    <Box sx={styles.root} component={FadeIn}>
      <Paper sx={styles.container}>
        <Typography variant="h2">Skills</Typography>

        <ToggleButtonGroup
          value={category}
          onChange={handleChangeCategory}
          exclusive
        >
          <ToggleButton value="All">All</ToggleButton>
          <ToggleButton value="Dev">Dev</ToggleButton>
          <ToggleButton value="Audio">Audio</ToggleButton>
        </ToggleButtonGroup>

        <TextField 
          placeholder="Search for Skill"
          value={searchText}
          onChange={handleChangeSearchText}
          InputProps={{
            endAdornment: Boolean(searchText) ? 
              <IconButton onClick={clearSearchText}><Close /></IconButton> :
              null
          }}
        />

        <List>
          {
            skills
              .filter(filterCategory)
              .filter(filterSearchText)
              .map(skill => <SkillListItem skill={skill} key={skill.id} />)
          }
        </List>
      </Paper>
    </Box>
  );
};
