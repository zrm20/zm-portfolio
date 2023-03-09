import * as functions from "firebase-functions";
import axios from "axios";

export const contactZach = functions.https.onRequest(
  async (req, res): Promise<any> => {
    if (req.method !== "POST") {
      return res.status(400).json({ success: false, msg: "Invalid request method" });
    }

    const { captcha, name, email, subject, body } = JSON.parse(req.body);

    if (!captcha) {
      return res.status(400)
        .json({ success: false, msg: "Missing captcha field in request body" });
    }

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
        return res.status(400).json({ success: false, msg: "Captcha failed" });
      }
    } catch (error) {
      console.error("Error verifying captcha:", error);
      return res.status(500).send("Internal server error");
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

      if(response.status !== 200) {
        return res.status(response.status || 500).json({ success: false, msg: "Failed to send message" });
      }
    } catch (error) {
      console.error("Error posting form data", error);
      return res.status(500).json({ success: false, msg: "Failed to send message" });
    }

    return res.status(200).json({ success: true, data: formData.values.toString() });
  });
