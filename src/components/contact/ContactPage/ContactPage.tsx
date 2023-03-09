import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";

import { FadeIn } from "../../animations";
import useStyles from "./ContactPage.styles";
import { useUpdateTitle } from "../../../hooks";
import ContactForm from "../ContactForm/ContactForm";
import { CheckCircle } from "@mui/icons-material";
import { ButtonLink } from "../../ui";

interface ContactPageProps {

};

export default function ContactPage(props: ContactPageProps): JSX.Element {
  const styles = useStyles();
  const [success, setSuccess] = useState<boolean>(false);
  useUpdateTitle("Contact Zach");

  return (
    <Box sx={styles.root} component={FadeIn}>
      <Paper sx={styles.container}>
        <Typography variant="h2">Contact Zach</Typography>

        {
          !success ?
          <ContactForm setSuccess={setSuccess}/> :
          <FadeIn style={styles.successContainer}>
            <CheckCircle sx={styles.successIcon} />
            <Typography variant="subtitle1">Your message was sent!</Typography>
            <ButtonLink sx={styles.homeLink} to="/" variant="contained">
              Home
            </ButtonLink>
          </FadeIn>
        }
      </Paper>
    </Box>
  );
};
