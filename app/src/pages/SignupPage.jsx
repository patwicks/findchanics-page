import React from "react";
import { useFormik } from "formik";
// local imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignupForm from "./form/SignupForm";
//validatio
import { signupFormValidation } from "./validation/authValidation";
const SignupPage = () => {
  //formik
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      console.log(values);
      actions.setSubmitting(false);
    }, 3000);
  };
  const {
    values,
    isSubmitting,
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: signupFormValidation,
    onSubmit,
  });

  const formikProps = {
    values,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
  };
  return (
    <>
      <Header />
      <div className="flex min-h-screen w-full justify-center py-16">
        <SignupForm {...formikProps} />
      </div>
      <Footer />
    </>
  );
};

export default SignupPage;
