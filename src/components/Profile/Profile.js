import React from "react";
import Navbar3 from "../Shared/Navbar/Navbar3";
import bgCorner from "../../Assets/startjourneyp1.png";
import bghome from "../../Assets/bghome.png";

const imgList = [
  {
    id: 1,
    name: "Modern art",
    img: "https://i.ibb.co/JCxjVFz/modern-art.jpg",
    button: "View",
  },
  {
    id: 2,
    name: "Traditional art",
    img: "https://i.ibb.co/QCJS6gR/traditional2.jpg",
    button: "View",
  },
  {
    id: 3,
    name: "Graphic Designer",
    img: "https://i.ibb.co/7RPY1fJ/graphic.jpg",
    button: "Follow",
  },
  {
    id: 4,
    img: "https://i.ibb.co/1nvxGPv/ui-ux.jpg",
  },
  {
    id: 5,
    img: "https://i.ibb.co/232ySXC/singing.jpg",
  },
  {
    id: 6,
    img: "https://i.ibb.co/FhQxqkb/danching.jpg",
  },
  {
    id: 7,
    img: "https://i.ibb.co/FhQxqkb/danching.jpg",
  },
  {
    id: 8,
    img: "https://i.ibb.co/FhQxqkb/danching.jpg",
  },
  {
    id: 9,
    img: "https://i.ibb.co/FhQxqkb/danching.jpg",
  },
];

const Profile = () => {
  return (
    <div>
        <div className=" bg-radial top-0">
            
            <div className="relative">
                <Navbar3/>
            </div>
            <img
            className="w-60  flex absolute left-0 -bottom-1"
            src={bgCorner}
            alt=""
          />

            <div className="relative flex laptopMd:flex-row tablet:flex-row flex-col mobileMd:items-center mobileLg:items-center mt-9 pb-8">
          {/* Profile start */}
          <div className="w-54 lg:ml-16 tablet:ml-6 laptopSm:53">
            <div className="bg-lightGrey bg-opacity-30 pb-8 mb-6">
              <div>
                <img
                  class="inline-block mt-6 h-16 w-16 border-none rounded-full"
                  src="https://s3-alpha-sig.figma.com/img/151c/b8cb/bcb8e52194cafc83e3b9316663abba2d?Expires=1666569600&Signature=NoCXlnJcCgfcDr7JNai1xHiGEF90YqAqVyrbIrgMoBgJlf7~KbWnV7RnAuQsaG2q2r4p4h0mMOYRm9siyChEV-h0ctww577G~incnN1RuNgKFbbnkWfAmtXOAq~XUJhpCNIL~jrieKXs3yl8mGuZr-Q-woOBIcOhXcHFBn90D2tMlEu3Mkmms-zSW8hyLm1SD1ZpOJQnAlUAAthgSs7SLIA4Iq36xIWxQUPPPp8E5CqEDGy5-ACZVKDfuNjdXuwcw3Ng4QWsexklukv7DfUFRZ500C-rR3Xb5x9zI37cfA1RUVlVvg-xguBOtdZakKzNAQI7GGYsvK3kqY8nlmkulw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt="{user.handle}"
                />
              </div>
              <div>
                <h2 className="font-semibold text-white text-lg">Rajeev Barma</h2>
                <h4 className="font-thin text-white">Modern artist</h4>
                <a className="font-thin underline	text-white" href="/">
                  www.rajeev347@gmail.com
                </a>
                <h4 className="font-thin text-white">Panjab, India</h4>
              </div>
              <div className="mt-12">
                <button className="bg-[#FFC7C7] text-black w-55 laptopSm:w-53 font-semibold rounded-sm">
                  Follow
                </button>
              </div>
              <div className="mt-2">
                <input
                  className="bg-white border-solid border border-white h-7 w-55 laptopSm:w-53 bg-opacity-10 placeholder:text-white placeholder:pl-12 rounded-sm"
                  type="text"
                  placeholder="Message"
                />
              </div>
              <div className="mt-6">
                <input
                  className="bg-white border-solid border border-white h-7 w-55 laptopSm:w-53 bg-opacity-10 placeholder:text-white placeholder:pl-12 rounded-sm"
                  type="text"
                  placeholder="Hire me"
                />
                <input
                  className="bg-white border-solid border border-white h-7 w-55 laptopSm:w-53 bg-opacity-10 placeholder:text-white placeholder:pl-12"
                  type="text"
                  placeholder="Full time job"
                />
                <input
                  className="bg-white border-solid border border-white h-7 w-55 laptopSm:w-53 bg-opacity-10 placeholder:text-white placeholder:pl-12 rounded-sm"
                  type="text"
                  placeholder="Freelancing/project"
                />
              </div>
              <div className="flex justify-between mt-6">
                <h4 className="text-white ml-8">Project views</h4>
                <h4 className="text-white mr-8">124,321</h4>
              </div>
              <div className="flex justify-between">
                <h4 className="text-white ml-8">Appreciations</h4>
                <h4 className="text-white mr-8">45,78</h4>
              </div>
              <div className="flex justify-between">
                <h4 className="text-white ml-8">Followers</h4>
                <h4 className="text-white mr-8">30,104</h4>
              </div>
              <div className="flex justify-between">
                <h4 className="text-white ml-8">Following</h4>
                <h4 className="text-white mr-8">150</h4>
              </div>
              <div className="flex justify-between">
                <h4 className="text-white ml-8">Uploaded</h4>
                <h4 className="text-white mr-8">32</h4>
              </div>
            </div>
          </div>
          {/* Profile end */}
          {/* Image card start */}
          <div className="lg:ml-12 tablet:ml-6 justify-center">
            <div className="flex ml-12">
              <div className="bg-[#FFC7C7] py-1 px-14 rounded">
                <h4 className="font-bold -ml-16 text-black">Work</h4>
              </div>
              <div className="ml-6">
                <h4 className="font-medium text-white">Appriciations</h4>
              </div>
            </div>
            <div className="grid  lg:grid-cols-3 grid-cols-1 mt-8">
              {imgList.map((image) => (
                <div className="mr-4 mobileMd:mr-0 mobileLg:mr-0 mb-4">
                  <img className="shadow-lg h-48 w-54" src={image.img} alt="" />
                </div>
              ))}
            </div>
          </div>
          {/* Image card end */}
        </div>

        </div>
    </div>
  );
};

export default Profile;
