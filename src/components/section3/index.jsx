import React from "react";
import Button from "../ui/button";
import { FaRegCircleCheck } from "react-icons/fa6";

const WorkFlow = () => {
  return (
    <div className="px-[162px] pb-[150px]">
      <div className="flex flex-col items-center mb-[50px]">
        <div className="text-[#04726C]">How it works</div>
        <div className="text-[52px] font-bold text-center w-[675px]">
          A step by step guide your 24/7 online clinic
        </div>
      </div>
      <div className="flex flex-col gap-[30px]">
        {/* -----------------------------step 1 */}

        <div className="flex">
          <div className="w-[537px] h-[339px] bg-[#04726C] text-white p-[30px] text-base shadow-xl">
            <div className="flex gap-[20px]">
              <div className="flex flex-col">
                Your Name
                <input
                  className="w-[221px] rounded-full px-[15px] py-[10px] bg-transparent border-[1px] text-white"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col">
                Age
                <input
                  className="w-[221px] rounded-full px-[15px] py-[10px] bg-transparent border-[1px] text-white"
                  type="number"
                  placeholder="Your Age"
                />
              </div>
            </div>
            <div className="flex flex-col mt-[20px]">
              Problem
              <textarea
                className=" rounded-full px-[15px] py-[10px] bg-transparent border-[1px] text-white"
                type="text"
                placeholder="Write problems"
              />
            </div>
            <div className="mt-[50px]">
              <Button
                className="px-5 py-[15px] flex justify-center bg-white text-base border-[1px] text-[#04726C] font-bold"
                buttonText="Submit Answer"
              />
            </div>
          </div>
          <div className="flex gap-[50px] ml-[113px] py-[61px]">
            <div
              className="radial-progress text-[#04726C] border-2"
              style={{
                "--value": "25",
                "--size": "106.38px",
                "--thickness": "2px",
              }}
              role="progressbar"
            >
              Step 1
            </div>
            <div className="flex flex-col gap-[30px] ">
              <div className="text-[28px] font-bold">
                Answer a few questions
              </div>
              <div className="w-[664px] text-xl text-[#232323] leading-[32.4px]">
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors
              </div>
              <div className="text-xl text-[#04726C] underline cursor-pointer">
                Example question
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------------step 2 */}

        <div className="flex">
          <div className="flex gap-[50px] py-[30px]">
            <div
              className="radial-progress text-[#04726C] border-2"
              style={{
                "--value": "50",
                "--size": "106.38px",
                "--thickness": "2px",
              }}
              role="progressbar"
            >
              Step 2
            </div>
            <div className="flex flex-col gap-[30px] ">
              <div className="text-[28px] font-bold">
                Diagnosis by real people, really fast
              </div>
              <div className="w-[664px] text-xl text-[#232323] leading-[32.4px]">
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors
              </div>
            </div>
          </div>
          <div className="w-[537px] h-[278px] bg-[#04726C] text-white p-[30px] text-base shadow-xl ml-[65px]">
            <div className="flex gap-[20px]">
              <div className="flex flex-col">
                <div className="size-12">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/section3/iconChat.png`}
                    alt="icon"
                    className="size-12"
                  />
                </div>
              </div>
              <div className="flex flex-col text-base">
                <div className="font-bold">Problem</div>
                <div className="border-[1px] rounded-2xl px-[15px] py-[10px]">
                  Clinical problems relate to topics provide clinicals and
                  clinical leaders opportunities to improve patient care. Naming
                  a problem can lead to evaluating and packaging new apporaches
                  that promote
                </div>
                <div className="flex gap-[10px] mt-[50px]">
                  <FaRegCircleCheck />
                  Problem Verified
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------------step 3 */}

        <div className="flex">
          <div className="w-[537px] h-[317px] bg-[#04726C] text-white p-[30px] text-base shadow-xl">
            <div className="flex flex-col gap-5">
              <div className="flex gap-5">
                <div className="flex flex-col">
                  Your Name
                  <input
                    className="w-[221px] rounded-full px-[15px] py-[10px] bg-transparent border-[1px] text-white"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="flex flex-col">
                  Account Number
                  <input
                    className="w-[221px] rounded-full px-[15px] py-[10px] bg-transparent border-[1px] text-white"
                    type="number"
                    placeholder="1234 5678 2345"
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col">
                  CVV
                  <input
                    className="w-[221px] rounded-full px-[15px] py-[10px] bg-transparent border-[1px] text-white"
                    type="number"
                    placeholder="6245"
                  />
                </div>
                <div className="flex flex-col">
                  Valid Thru
                  <input
                    className="w-[221px] rounded-full px-[15px] py-[10px] bg-transparent border-[1px] text-white"
                    type="number"
                    placeholder="4/23"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[50px]">
              <Button
                className="px-5 py-[15px] flex justify-center bg-white text-base border-[1px] text-[#04726C] font-bold"
                buttonText="Pay Now"
              />
            </div>
          </div>
          <div className="flex gap-[50px] ml-[113px] py-[30px]">
            <div
              className="radial-progress text-[#04726C] border-2"
              style={{
                "--value": "75",
                "--size": "106.38px",
                "--thickness": "2px",
              }}
              role="progressbar"
            >
              Step 3
            </div>
            <div className="flex flex-col gap-[30px] ">
              <div className="text-[28px] font-bold">Payment & Insurance</div>
              <div className="w-[664px] text-xl text-[#232323] leading-[32.4px]">
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors
              </div>
              <div className="flex gap-[30px]">
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/section3/iconVisa.png`}
                    alt="icon"
                  />
                </div>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/section3/iconWu.png`}
                    alt="icon"
                  />
                </div>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/section3/iconMoneyGram.png`}
                    alt="icon"
                  />
                </div>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/section3/iconBitcoin.png`}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------------step 4 */}

        <div className="flex">
          <div className="flex gap-[50px] py-[30px]">
            <div
              className="radial-progress text-[#04726C] border-2"
              style={{
                "--value": "100",
                "--size": "106.38px",
                "--thickness": "2px",
              }}
              role="progressbar"
            >
              Step 4
            </div>
            <div className="flex flex-col gap-[30px] ">
              <div className="text-[28px] font-bold">Start feeling better</div>
              <div className="w-[664px] text-xl text-[#232323] leading-[32.4px]">
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors
              </div>
              <div className="text-xl text-[#04726C] underline cursor-pointer">
                Get Started
              </div>
            </div>
          </div>
          <div className="w-[537px] h-[293px] bg-[#04726C] text-white p-[30px] text-base shadow-xl ml-[65px]">
            <div className="flex gap-[20px]">
              <div className="flex flex-col text-base">
                <div className="font-bold">Treatment</div>
                <div className="border-b-2"></div>
                <ol className="list-decimal pl-[30px] text-lg">
                  <li>Don’t do any hardwork</li>
                  <li>Make sure blood pressure is okay</li>
                  <li>Change food habbit. Add some vegitables</li>
                  <li>
                    Regularly take those medicine that attached in photo media
                  </li>
                  <li>Update us your health condition within 7 days</li>
                </ol>
                <div className="flex gap-[10px] mt-[24px]">
                  <FaRegCircleCheck />
                  Success
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
