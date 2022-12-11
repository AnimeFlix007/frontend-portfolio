import * as Yup from "yup";

const contactSchema = Yup.object({
  name: Yup.string().required("Your Name is required"),
  email: Yup.string().email().required("E-mail is required"),
  message: Yup.string().min(6).required("Message is required")
});

export default contactSchema;