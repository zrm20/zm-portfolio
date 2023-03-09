import React from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

import useStyles from "./ExperienceCard.styles";
import { getMonthAndYearString } from "../../../utils/dateStrings";
import { CollapsingText, IconLink } from "../../ui";
import { Info } from "@mui/icons-material";

interface ExperienceCardProps {
  experience: Experience;
};

export default function ExperienceCard(props: ExperienceCardProps): JSX.Element {
  const styles = useStyles();
  const { experience } = props;

  return (
    <Card sx={styles.root}>
      <CardContent>
        <IconLink to={`/experience/${experience.id}`} sx={styles.detailsBtn}>
          <Info />
        </IconLink>
        <img
          src={experience.logo}
          alt={experience.company}
          style={styles.logo}
        />
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
