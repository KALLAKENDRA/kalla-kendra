import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
        <div className="card bg-lightGrey bg-opacity-25  w-full desktopSm:w-2/4 desktopMd:w-2/4 desktopLg:w-2/4 tablet:w-3/4 mobileLg:w-full mobileMd:w-full h-full desktopSm:h-1/2 desktopMd:h-1/2 desktopLg:h-1/2 laptopSm:h-4/5 laptopMd:h-4/5 laptopLg:h-4/5 tablet:h-4/5  mobileMd:h-full mobileLg:h-full  flex flex-col items-center justify-center">
          <div>
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
              // Temporary Prompt For UPDATED USER
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
            <form className="flex flex-col items-center justify-center">
              <div className="form-control mt-6">
                <label className="label">
                  <span className="label-text text-base font-bold text-white">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input desktopSm:w-96 desktopMd:w-96 desktopLg:w-96  bg-opacity-10"
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base pt-3 font-bold text-white">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input desktopSm:w-96 desktopMd:w-96 desktopLg:w-96 mobile:w-1/3 bg-opacity-10"
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base pt-3 font-bold text-white">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input desktopSm:w-96 desktopMd:w-96 desktopLg:w-96 mobile:w-1/3 bg-opacity-10"
                  {...register("Confirmpassword", {
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

              <input
                className="btn border-none w-56 bg-rosewood hover:bg-azure mt-8"
                type="submit"
                value="Next"
                onClick={handleSubmit(onSubmit)}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
