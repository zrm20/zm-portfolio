import React from "react";

import useStyles from "./ExperiencePage.styles";

interface ExperiencePageProps {

};

export default function ExperiencePage(props: ExperiencePageProps): JSX.Element {
  const styles = useStyles();

  return (
    <div style={styles.root} >
      Experience Page
    </div>
  );
};
