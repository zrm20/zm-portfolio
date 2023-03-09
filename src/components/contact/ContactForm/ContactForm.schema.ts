import * as Yup from "yup";

const contactFormSchema = Yup.object(
  {
    name: Yup.string()
      .required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Must be a valid email"),
    body: Yup.string(),
    subject: Yup.string(),
    captcha: Yup.string()
  }
);

export default contactFormSchema;