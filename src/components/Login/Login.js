import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import bgCorner1 from "../../Assets/bgCorner1.png";
import bgCorner2 from "../../Assets/bgCorner2.png";
import bghome from "../../Assets/bghome.png";

const Login = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  
  };
  return (
   <>
    <div className="top-0 absolute bg-cover">
        <img className="w-screen h-screen" src={bghome} alt="" />
        <img className="w-60  flex absolute left-0 top-0" src={bgCorner2} alt="" />
        <img className="w-60 absolute bottom-0 right-0 " src={bgCorner1} alt="" />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="card bg-lightGrey bg-opacity-25 w-2/4">
          <div>
            <h2 className="text-4xl font-aclonica pt-14 pb-14 text-left pl-12 text-white">Login</h2>
            <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit(onSubmit)}>
  
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-base font-bold text-white">Email</span>
                 
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input w-96 bg-opacity-10"
                  {...register("email", {
                      required:{
                          value:true,
                          message: 'Email is required'
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Provide a valid email'
                      }
                    })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base pt-3 font-bold text-white">Password</span>
                 
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input w-96 mb-6 bg-opacity-10"
                  {...register("password", {
                      required:{
                          value:true,
                          message: 'Password is required'
                      },
                      minLength: {
                        value: 6,
                        message: 'Must be 6 characters or longer'
                      }
                    })}
                />
             
              </div>
              <p className='pb-9 pl-64 text-white underline hover:text-vividGreen'><Link  to='/'>Forgot Password</Link></p>
             
             
              <input className="btn border-none w-56 bg-rosewood hover:bg-azure" type="submit" value='Login' />
            </form>
            <p className='pt-4 pb-14 text-white'>Don't have an account?  <Link className='font-bold hover:text-vividGreen' to='/signup'> Sign up</Link></p>
           
            
            
          </div>
        </div>
      </div>
     </>
  )
}

export default Login