import { useFormik } from "formik";
import React, { useRef } from "react";
import contactSchema from "../schema/ContactFormSchema";
import "../scss/Contact.scss";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const form = useRef()
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: contactSchema,
      onSubmit: async (values, action) => {
        console.log("submitted", values);
        emailjs
          .sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_ID,
          )
          .then(
            (result) => {
              toast.success("Message send Successfully!", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              console.log(result);
            },
            (error) => {
              toast.error("Something went wrong!", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              console.log(error);
            }
          );

        action.resetForm();
      },
    });

  return (
    <div id="contact" className="app__contact">
      <h2 className="head-text">Contact Me</h2>

      <form ref={form} className="app__contact-form">
        <div>
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p className="form-error">{errors.name}</p>
          ) : null}
        </div>
        <div>
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={values.message}
            name="message"
            id="message"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && touched.message ? (
            <p className="form-error">{errors.message}</p>
          ) : null}
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
