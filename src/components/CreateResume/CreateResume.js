import React from 'react';
import { useForm } from 'react-hook-form';
import bgCorner1 from "../../Assets/bgCorner1.png";
import bgCorner2 from "../../Assets/bgCorner2.png";
import bghome from "../../Assets/bghome.png";

const CreateResume = () => {
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
        <div className="card bg-lightGrey bg-opacity-25 px-10">
          <div>
            <h2 className="text-2xl font-aclonica pt-14 pb-14 text-left pl-12 text-white">Create a resume</h2>
            <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit(onSubmit)}>


           {/* name start  */}

           <div className='flex items-center justify-evenly gap-6'>
           <div className="form-control">
              <label className="label">
                <span className=" text-base text-white">First Name</span>
               
              </label>
              <input
                type="text"
                
                className="input bg-opacity-10"
                {...register("name", {
                    required:{
                        value:true,
                        message: 'Name is required'
                    }
                  })}
              />
             
            </div>

            <div className="form-control">
              <label className="label">
                <span className=" text-base text-white">Middle Name</span>
               
              </label>
              <input
                type="text"
                
                className="input  bg-opacity-10"
                {...register("name", {
                    required:{
                        value:true,
                        message: 'Name is required'
                    }
                  })}
              />
             
            </div>

            <div className="form-control">
              <label className="label">
                <span className=" text-base text-white">Last Name</span>
               
              </label>
              <input
                type="text"
               
                className="input  bg-opacity-10"
                {...register("name", {
                    required:{
                        value:true,
                        message: 'Name is required'
                    }
                  })}
              />
             
            </div>
           </div>



           {/* name end  */}



           {/* email start  */}

           <div className="form-control ">
                <label className="label">
                  <span className=" text-base  text-white">Email</span>
                 
                </label>
                <input
                  type="email"
                  
                  className="input w-107 bg-opacity-10"
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


           {/* email end  */}
           


           {/* phone start  */}

           <div className='flex justify-evenly'>
           <div className="form-control">
              <label className="label">
                <span className=" text-base text-white">Ph no.</span>
               
              </label>
              <input
                type="number"
               
                className="input  bg-opacity-10"
                {...register("number", {
                    required:{
                        value:true,
                        message: 'Number is required'
                    }
                  })}
              />
             
            </div>

            <div className="form-control">
              <label className="label">
                <span className=" text-base text-white">Alternate Ph no.</span>
               
              </label>
              <input
                type="number"
               
                className="input  bg-opacity-10"
                {...register("number", {
                    required:{
                        value:true,
                        message: 'Number is required'
                    }
                  })}
              />
             
            </div>
           </div>


           {/* phone end  */}



              
              
            
             
             
              <input className="btn border-none mt-7 mb-7 w-56 bg-rosewood hover:bg-azure" type="submit" value='Create' />
            </form>
          
           
            
            
          </div>
        </div>
      </div>
     </>
  )
}

export default CreateResume