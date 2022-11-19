import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import bgCorner1 from "../../Assets/bgCorner1.png";
import bgCorner2 from "../../Assets/bgCorner2.png";
import bghome from "../../Assets/bghome.png";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [isError, setIsError] = useState("");
  const [tempLogin, setTempLogin] = useState(""); // temp = temporary

  const onSubmit = async (e) => {
    // Adding API FOR LOGIN
    try {
      const responce = await fetch(`http://localhost:5000/Login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.email,
          password: e.password,
        }),
      });

      const Data = await responce.json();
      console.log(Data, "Data");
      if (Data.message) {
        throw new Error(Data.message);
      } else {
        window.localStorage.setItem("kallakendra_id", Data.user._id);
        console.log(e);
        setTempLogin("Logged In");
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
      <div className="top-0 absolute bg-cover overflow-x-scroll">
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
        <div className=" relative bg-lightGrey bg-opacity-25 w-2/4 rounded-lg">
          <div className="">
            <h2 className="text-4xl font-aclonica pt-14 p-10 pb-14 text-start  text-white">
              Login
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
                  <span className="label-text text-base font-bold text-white ">
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
              <p className=" mt-5 mb-5   text-white underline hover:text-vividGreen">
                <Link to="/forgotPass">Forgot Password</Link>
              </p>

              <input
                className="btn border-none w-7/12 bg-rosewood hover:bg-azure"
                type="submit"
                value="Login"
              />
            </form>
            <p className="pt-4 pb-14 text-white">
              Don't have an account?
              <Link className="font-bold hover:text-vividGreen" to="/signup">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
