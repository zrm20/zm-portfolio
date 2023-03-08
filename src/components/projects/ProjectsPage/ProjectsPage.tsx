import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import { v4 as uuid } from "uuid";
import { 
  Box, 
  Divider, 
  IconButton, 
  InputAdornment, 
  List, 
  Paper, 
  TextField, 
  ToggleButton, 
  ToggleButtonGroup, 
  Typography 
} from "@mui/material";

import { getProjects } from "../../../database/Projects";
import useStyles from "./ProjectsPage.styles";
import ProjectCard from "../ProjectCard/ProjectCard";
import { FadeIn } from "../../animations";

export default function ProjectsPage(): JSX.Element {
  const styles = useStyles();
  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const [searchText, setSearchText] = useState<string>('');

  function handleChangeCategory(evt: React.MouseEvent, value: string): void {
    if (value === "All" || value === "Dev" || value === "Audio") {
      setCategory(value)
    };
  };

  function handleChangeText(evt: React.ChangeEvent<HTMLInputElement>): void {
    setSearchText(evt.target.value);
  };

  function clearSearchText(): void {
    setSearchText("");
  };

  const categoryFilteredProjects = getProjects(proj => {
    if (category === "All") {
      return true
    } else {
      return proj.category === category
    }
  });

  const textFilteredProjects = categoryFilteredProjects.filter(proj => {
    return proj.title.toLowerCase().includes(searchText.toLowerCase()) ||
      proj.subtitle.toLowerCase().includes(searchText.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchText.toLowerCase())
  });

  return (
    <Box sx={styles.root} component={FadeIn} >
      <Paper sx={styles.container}>
        <Typography variant="h2">Projects</Typography>

        <Box sx={styles.categorySelector}>
          <Typography component="label" htmlFor="category">Category</Typography>
          <ToggleButtonGroup
            id="category"
            value={category}
            onChange={handleChangeCategory}
            exclusive
          >
            <ToggleButton value="All">All</ToggleButton>
            <ToggleButton value="Audio">Audio</ToggleButton>
            <ToggleButton value="Dev">Dev</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <TextField 
          sx={styles.searchbar}
          placeholder="Search Projects"
          value={searchText}
          onChange={handleChangeText}
          helperText={<Typography variant="caption">You can search by title, subtitle or description</Typography>}
          InputProps={
            {
              endAdornment: searchText ? <InputAdornment position="end">
                <IconButton onClick={clearSearchText}>
                  <Close />
                </IconButton>
              </InputAdornment>: 
              null
            }
          }
        />

        <List>
          {
            textFilteredProjects.map(proj => (
              <>
                <ProjectCard project={proj} key={uuid()}/>
                <Divider key={uuid()} />
              </>
            ))
          }
        </List>
      </Paper>
    </Box>
  );
};
