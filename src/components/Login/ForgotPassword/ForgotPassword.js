import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import bgCorner1 from "../../../Assets/bgCorner1.png";
import bgCorner2 from "../../../Assets/bgCorner2.png";
import bghome from "../../../Assets/bghome.png";

const ForgotPassword = () => {
  // Adding API FOR FORGET PASSWORD

  const { register, handleSubmit } = useForm();
  const [isError, setIsError] = useState("");
  const [tempLogin, setTempLogin] = useState(""); // temp = temporary

  const onSubmit = async (e) => {
    try {
      const responce = await fetch(`http://localhost:5000/ForgetPassword`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.email,
          password: e.password,
          Confirmpassword: e.Confirmpassword,
        }),
      });

      const Data = await responce.json();
      console.log(Data, "Data");
      if (Data.status === "error") {
        throw new Error(Data.message);
      } else {
        // window.localStorage.setItem("kallakendra_id", Data.user._id);
        console.log(e);
        setTempLogin(Data.message);
        setIsError(false);
      }
    } catch (error) {
      console.log(error.message);
      setIsError(error.message);
      setTempLogin(false);
    }
  };
  return (
    <>
      <div className="absolute bg-cover">
        <img className="w-screen h-screen" src={bghome} alt="" />
        <img
          className="w-60  flex absolute left-0 top-0"
          src={bgCorner2}
          alt=""
        />
        <img
          className="w-60 absolute bottom-0 right-0 "
          src={bgCorner1}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="relative bg-lightGrey bg-opacity-25 w-2/4 rounded-lg p-2">
          <div>
            <h2 className="text-xl md:text-3xl font-aclonica pt-3 p-2 pb-4 text-start text-white">
              Forget Password
            </h2>
            {isError && (
              //  Temporary Prompt FOR ERROR HANDLING
              <div className="alert alert-error shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-current flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>{isError}.</span>
                </div>
              </div>
            )}
            {tempLogin && (
              // Temporary Prompt For LOGIN
              <div className="alert alert-success shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-current flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>"Temporary prompt" {tempLogin}.</span>
                </div>
              </div>
            )}
            <form
              className="flex flex-col items-center relative w-full  justify-between"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="p-2 form-control flex flex-col flex-wrap w-full items-center ">
                <label className="label text-right md: w-11/12 ">
                  <span className="label-text text-base font-bold text-white text-left">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input w-full md:w-11/12 bg-opacity-10"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                />
              </div>
              <div className="p-2 form-control flex flex-col flex-wrap w-full items-center">
                <label className="label text-right md: w-11/12 ">
                  <span className="label-text text-base font-bold text-white">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input w-full md:w-11/12 bg-opacity-10"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
              </div>
              <div className="p-2 form-control flex flex-col flex-wrap w-full items-center">
                <label className="label text-right md: w-11/12 ">
                  <span className="label-text text-base font-bold text-white text-left">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input w-full md:w-11/12 bg-opacity-10"
                  {...register("Confirmpassword", {
                    required: {
                      value: true,
                      message: "Confirmpassword Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
              </div>

              <input
                className="btn border-none w-11/12 bg-rosewood hover:bg-azure"
                type="submit"
                value="Next"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
