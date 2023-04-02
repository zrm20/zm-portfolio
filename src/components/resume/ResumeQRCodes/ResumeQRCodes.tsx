import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { GridProps, Grid, Typography, Link, Box } from "@mui/material";
import QRCode from 'qrcode.react';

import useStyles from "./ResumeQRCodes.styles";
import ResumeSectionTitle from "../ResumeSectionTitle/ResumeSectionTitle";
import { LINKEDIN_URL, PORTFOLIO_DOMAIN, PORTFOLIO_URL } from "../../../constants/urls";

interface ResumeQRCodesProps extends GridProps {

};

export default function ResumeQRCodes(props: ResumeQRCodesProps): JSX.Element {
  const styles = useStyles();
  const { ...rest } = props;

  const Website = (props: { href: string, label: string }) => (
    <Box sx={styles.website}>
      <Typography>{props.label}</Typography>
      <QRCode
        renderAs='canvas'
        value={props.href}
        style={styles.qrCode}
      />
    </Box>
  );

  return (
    <Grid item component="section" sx={styles.root} {...rest} >
      <ResumeSectionTitle to={undefined} center >Websites</ResumeSectionTitle>

      <Box sx={styles.websiteContainer}>
        <Website label="Portfolio" href={PORTFOLIO_URL} />
        <Website label="LinkedIn" href={LINKEDIN_URL} />
      </Box>

      <Box sx={styles.textContainer}>
        <Typography>
          This resume is interactive. Check it out
          at <Link component={RouterLink} to='/resume'>{PORTFOLIO_DOMAIN}/resume</Link>
        </Typography>
        <Typography color='secondary'>
          Built with React.js <i className='devicon-react-original' ></i>
        </Typography>
      </Box>
    </Grid>
  );
};
