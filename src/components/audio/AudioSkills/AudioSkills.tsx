import React, { useState } from "react";
import { Box, Button, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { audioSkills } from "../../../database/Skills";

import useStyles from "./AudioSkills.styles";

interface AudioSkillsProps {

};

export default function AudioSkills(props: AudioSkillsProps): JSX.Element {
  const styles = useStyles();
  const [page, setPage] = useState<number>(1);

  function showMore(): void {
    setPage(page + 1);
  };

  function showLess(): void {
    if(page - 1 > 0) {
      setPage(page - 1);
    };
  };

  const numItemsShown = page * 4 > audioSkills.length ? audioSkills.length : page * 4;

  return (
    <Box sx={styles.root}>
      <List>
        {
          audioSkills.slice(0, numItemsShown)
            .map(skill => (
            <>
              <ListItem>
                <ListItemText primary={skill.name}/>
              </ListItem>
            </>
          ))
        }
      </List>
      <Stack sx={styles.pageStack}>
        <Button onClick={showLess} disabled={page <= 1} color="secondary">Show Less</Button>
        <Typography variant="caption">{numItemsShown} of {audioSkills.length}</Typography>
        <Button onClick={showMore} disabled={numItemsShown >= audioSkills.length} >Show More</Button>
      </Stack>
    </Box>
  );
};
