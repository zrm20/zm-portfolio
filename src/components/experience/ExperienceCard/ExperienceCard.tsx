import React from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

import useStyles from "./ExperienceCard.styles";
import { getMonthAndYearString } from "../../../utils/dateStrings";
import { CollapsingText } from "../../ui";
import { Link } from "react-router-dom";

interface ExperienceCardProps {
  experience: Experience;
};

export default function ExperienceCard(props: ExperienceCardProps): JSX.Element {
  const styles = useStyles();
  const { experience } = props;

  const linkString = `/experience/${experience.id}`;

  return (
    <Card sx={styles.root}>
      <CardContent>
        <Link to={linkString}>
          <img
            src={experience.logo}
            alt={experience.company}
            style={styles.logo}
          />
        </Link>
        <Typography variant="h5" sx={styles.company}>{experience.company}</Typography>
        <Box sx={styles.titles}>
          {
            experience.titles.map((title, i) => (
                <Typography key={title} variant="subtitle1">
                  {title}
                </Typography>
            ))
          }
        </Box>
        <Stack direction="row" sx={styles.dates}>
          <Typography variant="caption">Started: {getMonthAndYearString(experience.startDate)}</Typography>
          {
            experience.endDate ?
              <Typography variant="caption">To: {getMonthAndYearString(experience.endDate)}</Typography> :
              <Typography variant="caption">To: Present</Typography>
          }
        </Stack>

        <CollapsingText collapsedSize={100}>
          {experience.description.split('\n')}
        </CollapsingText>
      </CardContent>
    </Card>
  );
};
