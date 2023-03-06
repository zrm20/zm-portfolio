import React from "react";
import { Paper, Typography, Box } from "@mui/material";

import useStyles from "./EducationCard.styles";
import { getMonthAndYearString } from "../../../utils/dateStrings";

interface EducationCardProps {
  education: Education
};

function DegreeCard(props: { degree: Degree }): JSX.Element {
  const styles = useStyles();
  const { degree } = props;
  return (
    <Paper sx={styles.root} >
      <Typography variant="h3">{degree.school.name}</Typography>
      <Typography variant="subtitle1" sx={styles.city}>{degree.school.city}, {degree.school.state}</Typography>
      
      <Box sx={styles.logoContainer}>
        <img
          src={degree.school.logo}
          alt={degree.school.name}
        />
      </Box>
      <Typography variant="h4">{degree.degree}</Typography>

      <Box sx={styles.degreeDetails}>
        {
          Boolean(degree.major) &&
          <Box>
            <Typography variant="caption">Major</Typography>
            <Typography variant="body2">{degree.major}</Typography>
          </Box>
        }
        {
          Boolean(degree.minor) &&
          <Box>
            <Typography variant="caption">Minor</Typography>
            <Typography variant="body2">{degree.minor}</Typography>
          </Box>
        }
      </Box>
      {
        Boolean(degree.endDate) &&
        <Typography variant="h6">{getMonthAndYearString(degree.endDate)}</Typography>
      }
    </Paper>
  );
};

function CertificateCard(props: { certificate: Certificate }): JSX.Element {
  const styles = useStyles();
  const { certificate } = props;

  return (
    <Paper sx={styles.root}>
      <Box sx={styles.certLogoContainer}>
        <img
          src={certificate.issuerLogo}
          alt={certificate.issuer}
        />
      </Box>
      <Typography variant="h6">{certificate.courseName}</Typography>

      {
        Boolean(certificate.url) &&
        <Box sx={styles.certUrlContainer}>
          <img
            src={certificate.url}
            alt={certificate.courseName}
          />
        </Box>
      }
    </Paper>
  )
};

export default function EducationCard(props: EducationCardProps): JSX.Element {
  const { type } = props.education;

  if(type === "degree") {
    return <DegreeCard degree={props.education.details as Degree}/>
  }

  return <CertificateCard certificate={props.education.details as Certificate} />
};
