import React, { useState } from "react";
import { Box, Button, Card, CardContent, Collapse, Stack, Typography } from "@mui/material";
import { v4 as uuid } from "uuid";

import useStyles from "./ExperienceCard.styles";
import { getMonthAndYearString } from "../../../utils/dateStrings";
import { IconLink } from "../../ui";
import { Info } from "@mui/icons-material";

interface ExperienceCardProps {
  experience: Experience;
};

export default function ExperienceCard(props: ExperienceCardProps): JSX.Element {
  const styles = useStyles();
  const [showMore, setShowMore] = useState<boolean>(false);
  const { experience } = props;

  function toggleShowMore(): void {
    setShowMore(!showMore);
  };

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

        <Collapse in={showMore} collapsedSize={100}>
          {
            experience.description.split('\n')
              .map(p => <Typography gutterBottom key={uuid()}>{p}</Typography>)
          }
        </Collapse>
        <Button color="secondary" onClick={toggleShowMore}>{showMore ? "Show Less" : "Show More"}</Button>
      </CardContent>
    </Card>
  );
};
