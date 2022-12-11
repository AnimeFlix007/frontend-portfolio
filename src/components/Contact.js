import { useFormik } from "formik";
import React from "react";
import contactSchema from "../schema/ContactFormSchema";
import "../scss/Contact.scss";
import { toast } from 'react-toastify';

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: contactSchema,
      onSubmit: async (values, action) => {
        console.log("submitted", values);
        toast.success('🦄 Wow so easy!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        action.resetForm();
      },
    });

  return (
    <div id="contact" className="app__contact">
      <h2 className="head-text">Contact Me</h2>

      <div className="app__contact-form">
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
      </div>
    </div>
  );
};

export default Contact;
