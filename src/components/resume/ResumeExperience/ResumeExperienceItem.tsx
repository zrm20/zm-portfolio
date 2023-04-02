import React from "react";
import { ListItem, Typography } from "@mui/material";

import { getExperience } from "../../../database/Experiences";
import { getMonthAndYearString } from "../../../utils/dateStrings";
import useStyles from "./ResumeExperienceItem.styles";

interface ResumeExperienceItemProps {
  experienceId: string;
};

export default function ResumeExperienceItem(props: ResumeExperienceItemProps): JSX.Element {
  const styles = useStyles();
  const experience = getExperience(props.experienceId);

  if (!experience) {
    return <></>
  };

  let titles: string = "";
  experience.titles.forEach((title, i) => {
    titles += title;
    if (i + 1 < experience.titles.length) {
      titles += ", "
    }
  });

  const startDate = getMonthAndYearString(experience.startDate);
  const endDate = experience.endDate ? getMonthAndYearString(experience.endDate) : "Present"

  return (
    <ListItem sx={styles.root}>
      <Typography variant="subtitle1" sx={styles.title}>
        <b>{experience.company}</b> - {titles}
      </Typography>
      <Typography variant="caption" sx={styles.dates}>
        {startDate} to {endDate}
      </Typography>
      <Typography sx={styles.description}>
        {experience.description}
      </Typography>
    </ListItem>
  );
};
