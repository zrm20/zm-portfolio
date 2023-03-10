import * as functions from "firebase-functions";
import axios from "axios";
const FormData = require("form-data");

interface Response {
  success: boolean,
  message?: string
};

export const submitContactForm = functions.https.onCall(
  async (contactFormData): Promise<Response> => {
    const { captcha, name, email, subject, body } = contactFormData;

    if (!captcha) {
      return { success: false };
    };

    const captchaVerifyUrl =
      "https://www.google.com/recaptcha/api/siteverify";

    try {
      const { data } = await axios.post(captchaVerifyUrl, null, {
        params: {
          secret: process.env.RECAPTCHA_SITEKEY,
          response: captcha,
        },
      });

      if (!data.success) {
        return { success: false, message: "Captcha failed" };
      }
    } catch (error) {
      console.error("Error verifying captcha:", error);
      return { success: false, message: "Internal server error" };
    }

    const formData = new FormData();
    formData.append("entry.26951904", subject);
    formData.append("entry.1023705407", name);
    formData.append("entry.1017610363", email);
    formData.append("entry.1700289887", body);


    const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfkSp94YbeUa_vgacj74JCgnyxjQUAFLsb0k3qE-sVBUK38hw/formResponse";
    const headers = {
      "Content-Type": "multipart/form-data"
    };

    try {
      const response = await axios.post(googleFormUrl, formData, { headers })

      if (response.status !== 200) {
        return { success: false, message: "Failed to send message" };
      }
    } catch (error) {
      console.error("Error posting form data", error);
      return { success: false, message: "Failed to send message" };
    }

    return { success: true };
  });
