import React from 'react';
import Button from '../ui/button';

const Contact = () => {
  return (
    <div className='bg-[#04726C]'>
      <div className='flex justify-between pb-[100px]'>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/hero/logo.png`}
            alt='img'
            className=''
          />
        </div>
        <div>arrow top</div>
      </div>
      <div className='flex flex-col gap-[50px] py-[100px] border-y-[1px]'>
        <div className='text-[28px]'>We’ll call you back</div>
        <div className=''>Input</div>
        <div className=''>
          <Button
            className='w-[184px] px-[60px] py-[20px] border-white bg-white h-[64px] text-[18px] border-[1px] text-[#04726C]'
            buttonText='Submit'
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
