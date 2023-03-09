import React from "react";

import useStyles from "./ExperienceDetailsPage.styles";

interface ExperienceDetailsPageProps {

};

export default function ExperienceDetailsPage(props: ExperienceDetailsPageProps): JSX.Element {
  const styles = useStyles();

  return (
    <div style={styles.root} >
      Experience Details
    </div>
  );
};
