import * as Yup from "yup";

export const signinFormValidation = new Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const PASSWORD_RULES = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9].{6,}$/;

export const signupFormValidation = new Yup.object().shape({
  email: Yup.string().email().required(),
  first_name: Yup.string()
    .min(2, "First name is too short")
    .max(255, "Last name is too long")
    .required("First name is required!"),
  last_name: Yup.string()
    .min(2, "Last name is too short")
    .max(255, "Last name is too long")
    .required("Last name is required"),
  password: Yup.string()
    .min(6)
    .matches(PASSWORD_RULES, "Password must have atleast 1 numerical characters")
    .required(),
  confirm_password: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Password not matched"),
});
