import React from 'react';
import Button from '../ui/button';

const Navbar = () => {
  return (
    <div className='px-[163px] py-[50px] text-white bg-black fixed w-full'>
      <div className='flex justify-between'>
        <div className='flex gap-[30px] text-[18px] items-center'>
          <div className='mr-[40px] flex gap-[15px]'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/hero/logo.png`}
              alt='img'
              className='w-[141px] h-[44px]'
            />
          </div>
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
        <div className='flex gap-[15px]'>
          <Button
            className='border-white border-[1px] h-[64px]'
            buttonText='ENG'
          />
          <Button
            className='border-white border-[1px] h-[64px]'
            buttonText='+01 237 759 782'
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
