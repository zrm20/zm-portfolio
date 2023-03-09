import React from "react";

import useStyles from "./ContactPage.styles";

interface ContactPageProps {

};

export default function ContactPage(props: ContactPageProps): JSX.Element {
  const styles = useStyles();

  return (
    <div style={styles.root} >
      Contact
    </div>
  );
};
