// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormikForm = () => (
  <div className="container mx-auto">
      <div className=" inline-block m-6 font-semibold border-b-4 border-green-500">Testing Formik, a react library for form handling</div>
    <Formik
      initialValues={{ email: '', password: '', gender: '', remember: true }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (values.gender === "") {
          errors.gender = "gender required!"
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className="flex flex-col px-6">
          <label>Gender:</label>
          <Field className="border p-2 shadow-inner my-2 max-w-md" as="select" name="gender">
            <option value=""></option>
            <option value="male">male</option>
            <option value="female">female</option>
          </Field>
          <ErrorMessage name="gender" component="div" />
          <label>Email:</label>
          <Field className="border p-2 shadow-inner my-2 max-w-md" type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <label>Password:</label>
          <Field className="border p-2 shadow-inner my-2 max-w-md" type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <div className="mb-2">
          <label>Remember me:</label>
          <Field className="form-checkbox mx-2" name="remember" type="checkbox" />
          </div>
          <button className="rounded-lg shadow-md bg-green-500 text-white max-w-xs py-2 px-4" type="submit" disabled={isSubmitting} style={isSubmitting? {backgroundColor: 'gray'}: {}}>
            Submit
          </button>
      <pre className="mt-4">{JSON.stringify(values)}</pre>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormikForm;
