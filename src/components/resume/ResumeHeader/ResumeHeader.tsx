import { Avatar, Grid, GridProps, Typography, Box } from "@mui/material";
import { EmailRounded } from "@mui/icons-material";
import React from "react";

import useStyles from "./ResumeHeader.styles";
import headshot from '../../../assets/images/headshot.jpeg';
import ContactItem from "../ContactItem/ContactItem";

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
          title="zach@zachrmccoy.com"
          href="mailto:zach@zachrmccoy.com"
          iconClass="fa-solid fa-envelope"
        />
        <ContactItem 
          title="(507) 829-2069"
          href="tel:5078292069"
          iconClass="fa-solid fa-phone"
        />
        <ContactItem 
          title="/in/zachmccoy"
          href="www.linkedin.com/in/zachmccoy"
          iconClass="fa-brands fa-linkedin"
        />
        <ContactItem 
          title="/zrm20"
          href="www.github.com/zrm20"
          iconClass="fa-brands fa-github"
        />
      </Box>
    </Grid>
  );
};
