import { ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./EducationListItem.styles";

interface EducationListItemProps {
  education: Education;
};

export default function EducationListItem(props: EducationListItemProps): JSX.Element {
  const styles = useStyles();
  const { education } = props;

  if ("degree" in education.details) {
    // This is a degree
    return (
      <ListItem>
        <ListItemButton component={Link} to={`/education/${education.id}`}>
          <ListItemAvatar sx={styles.logoContainer}>
            <img src={education.details.school.logo} alt={education.details.school.name} />
          </ListItemAvatar>
          <ListItemText
            primary={education.details.school.name}
            secondary={education.details.degree + (education.details.major ? ` - ${education.details.major}` : null)}
          />
        </ListItemButton>
      </ListItem>
    )
  }

  // This is a certificate
  return (
    <ListItem sx={styles.root}>
      <ListItemButton component={Link} to={`/education/${education.id}`}>
        <ListItemAvatar sx={styles.logoContainer}>
          <img src={education.details.issuerLogo} alt={education.details.issuer} />
        </ListItemAvatar>
        <ListItemText
          primary={education.details.courseName}
          secondary={education.details.issuer}
        />
      </ListItemButton>
    </ListItem>
  );
};
