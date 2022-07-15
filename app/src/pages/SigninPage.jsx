import React from "react";
import { useFormik } from "formik";
//validation
import { signinFormValidation } from "./validation/authValidation";
// loca imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import SigninForm from "./form/SigninForm";
const SigninPage = () => {
  //formik
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      actions.resetForm();
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
      password: "",
    },
    validationSchema: signinFormValidation,
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
        <SigninForm {...formikProps} />
      </div>
      <Footer />
    </>
  );
};

export default SigninPage;
