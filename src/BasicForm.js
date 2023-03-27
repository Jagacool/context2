import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const formvalidationSchema = yup.object({
  email: yup
    .string()
    .min(5, "Need a longer email")
    .required("Why not fill the email?😉")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Enter valid email"),
  password: yup
    .string()
    .min(8, "Need a longer password🥳")
    .max(12, "Too much password")
    .required("Why not fill the password? 😉")
    .matches(
      /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#!@%&$]).{8,}$/,
      "Enter valid password"
    ),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formvalidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Basic Form</h1>
      <input
        id="email"
        name="email"
        value={formik.values.email}
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
      <br />
      <br />
      <input
        id="password"
        name="password"
        value={formik.values.password}
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <br />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : ""}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BasicForm;
