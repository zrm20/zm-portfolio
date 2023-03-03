import React, { useState } from "react";
import { Box, Tab, Tabs, Grid } from "@mui/material";

import useStyles from "./TechStack.styles";
import { getSkills } from "../../../database/Skills";
import { SkillItem } from "../../ui";

interface TechStackProps {

};

export default function TechStack(props: TechStackProps): JSX.Element {
  const styles = useStyles();
  const [tab, setTab] = useState<string>("Language");
  const devSkills = getSkills(skill => skill.category === "Dev");

  function handleTabChange(evt: React.SyntheticEvent, newValue: string): void {
    setTab(newValue);
  };

  return (
    <Box sx={styles.root} >
      <Tabs
        sx={styles.tabs}
        value={tab}
        onChange={handleTabChange}
      >
        <Tab value="Language" label="Languages" />
        <Tab value="Front End" label="Front End" />
        <Tab value="Back End" label="Back End" />
        <Tab value="Database" label="Database" />
        <Tab value="Testing" label="Testing" />
        <Tab value="CI/CD" label="CI/CD" />
      </Tabs>

      <Grid container sx={styles.container}>
        {
          devSkills
            .filter(skill => skill.subcategory === tab)
            .map(skill => (
              <Grid item>
                <SkillItem skill={skill} size={75} />
              </Grid>
            ))
        }
      </Grid>
    </Box>
  );
};
