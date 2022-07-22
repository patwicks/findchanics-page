import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const SignupForm = (props) => {
  const navigateTo = useNavigate();
  const inputRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const {
    values,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
  } = props;

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="w-full max-w-[30rem] px-5 py-10">
      <h1 className="py-2 text-2xl font-bold">Create an account</h1>
      <p className="text-sm">Input your personal information</p>
      <form className="mt-8 flex w-full flex-col" onSubmit={handleSubmit}>
        {/* email */}
        <label className="font-semibold" htmlFor="first_name">
          First name
        </label>
        <div className="h-12 w-full overflow-hidden rounded-sm">
          <input
            className="text-md h-full w-full rounded-sm border-[1px] border-darkBlack bg-transparent px-3 outline-none focus:border-[2px]"
            type="text"
            name="first_name"
            required
            ref={inputRef}
            autoComplete="off"
            placeholder="Type your first name"
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {/* error */}
        {errors.first_name && touched.first_name && (
          <p className="py-1 pl-2 text-sm text-red-400">{errors.first_name}</p>
        )}

        {/* Lastname */}
        <label className="mt-5 font-semibold" htmlFor="last_name">
          Last name
        </label>
        <div className="h-12 w-full overflow-hidden rounded-sm">
          <input
            className="text-md h-full w-full rounded-sm border-[1px] border-darkBlack bg-transparent px-3 outline-none focus:border-[2px]"
            type="text"
            name="last_name"
            required
            autoComplete="off"
            placeholder="Type your last name"
            value={values.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {/* error */}
        {errors.last_name && touched.last_name && (
          <p className="py-1 pl-2 text-sm text-red-400">{errors.last_name}</p>
        )}
        {/* email */}
        <label className="mt-5 font-semibold" htmlFor="email">
          Email
        </label>
        <div className="h-12 w-full overflow-hidden rounded-sm">
          <input
            className="text-md h-full w-full rounded-sm border-[1px] border-darkBlack bg-transparent px-3 outline-none focus:border-[2px]"
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder="Type your email address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {/* error */}
        {errors.email && touched.email && (
          <p className="py-1 pl-2 text-sm text-red-400">{errors.email}</p>
        )}

        {/* password */}
        <label className="mt-5 font-semibold" htmlFor="password">
          Password
        </label>
        <div className="relative h-12 w-full overflow-hidden rounded-sm">
          <input
            className="text-md h-full w-full rounded-sm border-[1px] border-darkBlack bg-transparent px-3 outline-none focus:border-[2px]"
            type={!showPassword ? "password" : "text"}
            name="password"
            placeholder="Type your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {!showPassword ? (
            <AiOutlineEye
              className="text-red absolute right-3 top-3 h-6 w-6 cursor-pointer hover:opacity-50
          "
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="text-red absolute right-3 top-3 h-6 w-6 cursor-pointer hover:opacity-50
          "
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
        {/* error */}
        {errors.password && touched.password && (
          <p className="py-1 pl-2 text-sm text-red-400">{errors.password}</p>
        )}
        {/* confirm Password */}
        <label className="mt-5 font-semibold" htmlFor="confirm_password">
          Confirm password
        </label>
        <div className="relative h-12 w-full overflow-hidden rounded-sm">
          <input
            className="text-md h-full w-full rounded-sm border-[1px] border-darkBlack bg-transparent px-3 outline-none focus:border-[2px]"
            type={!showPassword ? "password" : "text"}
            name="confirm_password"
            placeholder="Confirm your password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {/* error */}
        {errors.confirm_password && touched.confirm_password && (
          <p className="py-1 pl-2 text-sm text-red-400">
            {errors.confirm_password}
          </p>
        )}
        <button
          className={`mt-10 w-full rounded-sm  py-2 uppercase text-whitey-100 hover:enabled:opacity-90 ${
            isSubmitting ? `cursor-not-allowed bg-darkBlack/50` : `bg-darkBlack`
          }`}
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "signing up..." : "submit"}
        </button>
      </form>
      <p className="mt-5 text-sm">
        Registered already?{" "}
        <span
          className="decoration cursor-pointer underline hover:text-brand"
          onClick={() => navigateTo("/signin")}
        >
          Sign in
        </span>
      </p>
    </div>
  );
};

export default SignupForm;
