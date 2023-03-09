import React from "react";
import { 
  Box, 
  TextField, 
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Backdrop, 
  CircularProgress, 
  FormHelperText, 
  Collapse 
} from "@mui/material";
import { useFormik } from "formik";
import ReCaptcha from "react-google-recaptcha";

import useStyles from "./ContactForm.styles";

interface ContactFormProps {
  setSuccess(value: boolean): void;
}

export default function ContactForm(props: ContactFormProps): JSX.Element {
  const styles = useStyles();
  const { values, handleChange, ...formik } = useFormik(
    {
      initialValues: {
        name: "",
        email: "",
        subject: "General Inquiry",
        body: "",
        captcha: null
      },
      onSubmit: (values) => {
        formik.setSubmitting(true);
        formik.setStatus(null);
        
        setTimeout(() => {
          formik.setSubmitting(false);
          console.log(values);
          formik.setStatus("Something went wrong");
        }, 4000);
      }
    }
  );

  function handleCaptchaChange(value: string | null): void {
    formik.setFieldValue("captcha", value);
  };

  return (
    <Box sx={styles.root}>
      <Backdrop open={formik.isSubmitting} sx={styles.backdrop}>
        <CircularProgress />
      </Backdrop>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Name"
          id="name"
          value={values["name"]}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          id="email"
          value={values["email"]}
          onChange={handleChange}
        />

        <FormControl>
          <InputLabel id="subject-label">Subject</InputLabel>
          <Select
            labelId="subject-label"
            id="subject"
            name="subject"
            label="Subject"
            value={values["subject"]}
            onChange={handleChange}
          >
            <MenuItem value="General Inquiry">General Inquiry</MenuItem>
            <MenuItem value="Software Work">Software Work</MenuItem>
            <MenuItem value="Audio Work">Audio Work</MenuItem>
            <MenuItem value="Trail Pack Pro App">Trail Pack Pro App</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Message"
          id="body"
          value={values["body"]}
          onChange={handleChange}
          multiline
          minRows={10}
        />
        
        
        <ReCaptcha
          sitekey={process.env.REACT_APP_CAPTCHA_SITEKEY!}
          onChange={handleCaptchaChange}
          id="captcha"
          theme="dark"
          className="captcha-root"
        />
        
        <Collapse in={Boolean(formik.status)}>
          <FormHelperText error>{formik.status}</FormHelperText>
        </Collapse>

        <Button 
          type="submit" 
          variant="contained"
          disabled={!Boolean(values["captcha"]) && !formik.isSubmitting}
        >
          Send
        </Button>

      </form>
    </Box>
  );
};
