import React, { useState } from 'react';
import Button from '../ui/button';
import { IoIosCloseCircleOutline, IoMdMenu } from 'react-icons/io';

const Navbar = () => {
  const [showSidebar, setShowSideBar] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar(!showSidebar);
  };

  return (
    <div id='navbar' className='sm:px-5 px-[163px] py-[50px] text-white bg-[#04726C] fixed w-full z-10'>
      <div className='flex justify-between'>
        <div className='flex gap-[30px] text-[18px] items-center'>
          <div className='mr-[40px] flex gap-[15px]'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/hero/logo.png`}
              alt='img'
              className='w-[141px] h-[44px]'
            />
          </div>
          <div className='sm:hidden xl:flex'>
            <div className='hover:bg-[#04726C] rounded-full p-[10px] cursor-pointer'>
              Home
            </div>
            <div className='hover:bg-[#04726C] rounded-full p-[10px] cursor-pointer'>
              About Us
            </div>
            <div className='hover:bg-[#04726C] rounded-full p-[10px] cursor-pointer'>
              Specialist
            </div>
            <div className='hover:bg-[#04726C] rounded-full p-[10px] cursor-pointer'>
              Services
            </div>
            <div className='hover:bg-[#04726C] rounded-full p-[10px] cursor-pointer'>
              Prices
            </div>
            <div className='hover:bg-[#04726C] rounded-full p-[10px] cursor-pointer'>
              Contact
            </div>
          </div>
        </div>
        <IoMdMenu
          className='cursor-pointer size-10 xl:hidden'
          onClick={toggleSideBar}
        />
        <div className='sm:hidden xl:flex gap-[15px]'>
          <Button
            className='border-white border-[1px] h-[64px]'
            buttonText='ENG'
            flag
            dropDown
          />
          <Button
            className='border-white border-[1px] h-[64px]'
            buttonText='+01 237 759 782'
            arrow
          />
        </div>
      </div>
      <div>
        {showSidebar && (
          <div className='fixed w-[300px] inset-y-0 right-0 z-20 text-white bg-[#04726C]'>
            <div className='flex flex-col items-center justify-center h-full gap-5'>
              <div className='py-5 text-2xl font-semibold uppercase'>Menu</div>
              <div className='py-2'>Home</div>
              <div className='py-2'>About Us</div>
              <div className='py-2'>Specialist</div>
              <div className='py-2'>Services</div>
              <div className='py-2'>Prices</div>
              <div className='py-2'>Contact</div>
              <Button
                className='border-white border-[1px] h-[64px] w-[210px] flex justify-center'
                buttonText='ENG'
                flag
                dropDown
              />
              <Button
                className='border-white border-[1px] h-[64px] w-[210px]'
                buttonText='+01 237 759 782'
                arrow
              />
            </div>

            <div
              className='absolute top-0 right-0 p-4 cursor-pointer'
              onClick={toggleSideBar}
            >
              <IoIosCloseCircleOutline className='size-10' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
