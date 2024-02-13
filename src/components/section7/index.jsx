import React from 'react';
import Button from '../ui/button';
import { FaArrowUpLong } from 'react-icons/fa6';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
        <div
          onClick={scrollToTop}
          className='cursor-pointer flex justify-center items-center bg-white text-[#04726C] p-[10px] size-[55px]  rounded-full'
        >
          {' '}
          <FaArrowUpLong />{' '}
        </div>
      </div>
      <div
        className='sm:flex sm:flex-col
       xl:flex xl:flex-col gap-[50px] py-[100px] border-y-[1px]'
      >
        <div className='text-[28px]'>We’ll call you back</div>
        <div
          className='sm:flex sm:flex-col
        xl:grid xl:grid-cols-2 gap-[30px]'
        >
          <input
            className='w-full flex items-center bg-transparent border-[1px] border-white px-[25px] py-[15px] rounded-full'
            type='text'
            placeholder='Full Name'
          />
          <select
            name='article'
            id='article'
            className='w-full flex items-center bg-transparent border-[1px] border-white px-[25px] py-[15px] rounded-full'
          >
            <option disabled selected>
              How do you want to be called?
            </option>
          </select>
          <select
            name='article'
            id='article'
            className='w-full flex items-center bg-transparent border-[1px] border-white px-[25px] py-[15px] rounded-full'
          >
            <option disabled selected>
              Cover the topic the article
            </option>
          </select>
          <input
            className='w-full flex items-center bg-transparent border-[1px] border-white px-[25px] py-[15px] rounded-full'
            type='text'
            placeholder='+01(___) ___ ___'
          />
        </div>
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
