"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserSchemaType, userSchema } from "../validations/userSchema";

const UserForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchemaType>({
    resolver: yupResolver(userSchema),
  });

  const [submittedData, setSubmittedData] = useState<UserSchemaType | null>(
    null
  );

  const onSubmit = (data: UserSchemaType) => {
    console.log("Form Data:", data);
    setSubmittedData(data);
  };

  return (
    <div className="absolute top-10 grid grid-cols-2 gap-8">
      <div>
        <div className="relative w-full h-[100%] bg-white rounded-lg shadow dark:border md:mt-0 md:h-full sm:max-w-md sm:h-full xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-6 space-y-4 md:space-y-3 sm:p-8">
            <h1 className="text-xl h-full font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form
              className="flex flex-col space-y-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className={`input-field`}
                  {...register("username")}
                />
                {errors.username && (
                  <p className="text-red-500">{errors.username.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`input-field`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className={`input-field`}
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className={`input-field`}
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  className={`input-field`}
                  {...register("dob")}
                />
                {errors.dob && (
                  <p className="text-red-500">{errors.dob.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  className={`input-field`}
                  {...register("bio")}
                  maxLength={300}
                />
                {errors.bio && (
                  <p className="text-red-500">{errors.bio.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-900 dark:text-white">
                  Gender
                </label>
                <div className="flex">
                  <label className="mr-2">
                    <input type="radio" value="Male" {...register("gender")} />
                    Male
                  </label>
                  <label className="mr-2">
                    <input
                      type="radio"
                      value="Female"
                      {...register("gender")}
                    />{" "}
                    Female
                  </label>
                  <label>
                    <input type="radio" value="Other" {...register("gender")} />
                    Other
                  </label>
                </div>
                {errors.gender && (
                  <p className="text-red-500">{errors.gender.message}</p>
                )}
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="termsAndConditions"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    {...register("termsAndConditions")}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="termsAndConditions"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
                {errors.termsAndConditions && (
                  <p className="text-red-500">
                    {errors.termsAndConditions.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        {submittedData && (
          <div className="bg-white rounded-lg shadow dark:border md:mt-0 md:h-full sm:max-w-md sm:h-full xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-6 space-y-4 md:space-y-3 sm:p-8">
              <h1 className="text-xl h-full font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Submitted Data
              </h1>
              <pre className="text-white">
                {JSON.stringify(submittedData, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserForm;
