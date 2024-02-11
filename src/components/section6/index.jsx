import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

const Help = () => {
  return (
    <div className="px-[162px] pb-[150px]">
      <div className="flex text-[18px]">
        <div className="flex flex-col gap-[45px] w-[607px]">
          <div>
            <div className="text-[#04726C]">We’re here to help</div>
            <div className="text-[52px]">Ready to give us a try?</div>
          </div>
          <div className="text-[#232323] text-xl leading-[32px]">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur labore et dolore magnam
            aliquam quaerat voluptatem.
          </div>
          <div className="flex gap-5">
            <div className="flex gap-5">
              <button className="w-[179px] h-[54px] flex items-center px-[13px] bg-[#04726C] rounded-full text-white gap-[11px]">
                <IoLogoGooglePlaystore className="size-8" />
                <div className="flex flex-col justify-start font-thin">
                  <div className="text-[13px] text-start">available on</div>
                  <div>Google play</div>
                </div>
              </button>
              <button className="w-[179px] h-[54px] flex items-center px-[13px] bg-[#04726C] rounded-full text-white gap-[11px]">
                <FaApple className="size-8" />
                <div className="flex flex-col justify-start font-thin">
                  <div className="text-[13px] text-start">available on</div>
                  <div>App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex pl-[88px] items-center ">
          <div className="flex flex-col shadow-xl p-[30px] w-[396px] h-[285px] gap-[45px]">
            <div className="flex gap-[25px]">
              <div className="rounded-full ">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/section6/iconRounded.png`}
                  alt="icon"
                />
              </div>
              <div className="text-base ">
                Hello I’m suffering from fiver since 1 weeks
              </div>
            </div>
            <div className="flex gap-[25px]">
              <div className="text-base ">
                Okay, no worries let me know how you get fiver?
              </div>
              <div className="rounded-full ">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/section6/iconRounded.png`}
                  alt="icon"
                />
              </div>
            </div>
            <div className="flex gap-[25px]">
              <div className="rounded-full ">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/section6/iconRounded.png`}
                  alt="icon"
                />
              </div>
              <div className="text-base ">
                I was out of my home and suddenly rain started and I got wet
              </div>
            </div>
          </div>
          <div className="pl-[155px] ">
            <img
              src={`${process.env.PUBLIC_URL}/assets/section4/doctor1.png`}
              alt="icon"
              className="w-[348px] h-[522px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
