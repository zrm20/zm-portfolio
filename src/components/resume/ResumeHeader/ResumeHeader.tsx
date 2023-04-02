import React from "react";
import { Avatar, Grid, GridProps, Typography, Box } from "@mui/material";

import useStyles from "./ResumeHeader.styles";
import headshot from '../../../assets/images/headshot.jpeg';
import ContactItem from "../ContactItem/ContactItem";
import { GITHUB_PATH, GITHUB_URL, LINKEDIN_PATH, LINKEDIN_URL } from "../../../constants/urls";
import { EMAIL, EMAIL_LINK, PHONE, PHONE_LINK } from "../../../constants/contact";

interface ResumeHeaderProps extends GridProps {

};

export default function ResumeHeader(props: ResumeHeaderProps): JSX.Element {
  const styles = useStyles();
  const { ...rest } = props;

  return (
    <Grid item component="section" sx={styles.root} {...rest} >
      <Avatar src={headshot} alt="Zach McCoy Headshot" sx={styles.avatar} />

      <Box sx={styles.textContainer}>
        <Typography variant="h1">Zach McCoy</Typography>
        <Typography variant='h3'>
          Bachelor of Science in Audio Engineering
        </Typography>
        <Typography color='textSecondary'>
          “A self-driven, lifelong learner with a well-rounded tool-kit of technical and personal skills. Always striving for growth and self-improvement.”
        </Typography>
      </Box>

      <Box sx={styles.contactContainer}>
        <ContactItem 
          title={EMAIL}
          href={EMAIL_LINK}
          iconClass="fa-solid fa-envelope"
        />
        <ContactItem 
          title={PHONE}
          href={PHONE_LINK}
          iconClass="fa-solid fa-phone"
        />
        <ContactItem 
          title={LINKEDIN_PATH}
          href={LINKEDIN_URL}
          iconClass="fa-brands fa-linkedin"
        />
        <ContactItem 
          title={GITHUB_PATH}
          href={GITHUB_URL}
          iconClass="fa-brands fa-github"
        />
      </Box>
    </Grid>
  );
};
