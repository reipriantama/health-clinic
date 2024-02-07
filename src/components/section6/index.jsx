import React from 'react';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaApple } from 'react-icons/fa';

const Help = () => {
  return (
    <div className='px-[162px] pb-[150px]'>
      <div className='flex justify-between text-[18px]'>
        <div className='flex flex-col gap-[45px] w-[607px]'>
          <div>
            <div className='text-[#04726C]'>We’re here to help</div>
            <div className='text-[52px]'>Ready to give us a try?</div>
          </div>
          <div className='text-[#232323]'>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur labore et dolore magnam
            aliquam quaerat voluptatem.
          </div>
          <div className='flex gap-5'>
            <div className='flex gap-5'>
              <button className='w-[179px] h-[54px] flex items-center px-[13px] bg-[#04726C] rounded-full text-white gap-[11px]'>
                <IoLogoGooglePlaystore className='size-8' />
                <div className='flex flex-col justify-start font-thin'>
                  <div className='text-[13px] text-start'>available on</div>
                  <div>Google play</div>
                </div>
              </button>
              <button className='w-[179px] h-[54px] flex items-center px-[13px] bg-[#04726C] rounded-full text-white gap-[11px]'>
                <FaApple className='size-8' />
                <div className='flex flex-col justify-start font-thin'>
                  <div className='text-[13px] text-start'>available on</div>
                  <div>App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className=''>left</div>
      </div>
    </div>
  );
};

export default Help;
