import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const SigninForm = (props) => {
  const navigateTo = useNavigate();
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
  return (
    <div className="w-full max-w-[30rem] px-5 py-10">
      <h1 className="py-2 text-2xl font-bold">Login your account</h1>
      <p className="text-sm">Use correct email and password to login</p>
      <form className="mt-8 flex w-full flex-col" onSubmit={handleSubmit}>
        {/* email */}
        <label className="font-semibold" htmlFor="email">
          Email
        </label>
        <div className="h-12 w-full overflow-hidden rounded-sm">
          <input
            className="text-md h-full w-full rounded-sm border-[1px] border-darkBlack bg-transparent px-3 outline-none focus:border-[2px]"
            type="email"
            name="email"
            required
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

        <button
          className={`mt-10 w-full rounded-sm  py-2 uppercase text-whitey-100 hover:enabled:opacity-90 ${
            isSubmitting ? `cursor-not-allowed bg-darkBlack/50` : `bg-darkBlack`
          }`}
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "signing in..." : "submit"}
        </button>
      </form>
      <p className="mt-5 text-sm">
        Not yet registered?{" "}
        <span
          className="decoration cursor-pointer underline hover:text-brand"
          onClick={() => navigateTo("/signup")}
        >
          Sign up
        </span>
      </p>
    </div>
  );
};

export default SigninForm;
