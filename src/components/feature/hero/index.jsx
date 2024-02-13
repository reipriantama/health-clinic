import React from 'react';
import Navbar from '../../layout/navbar';
import Button from '../../ui/button';

const Hero = () => {
  const backgroundImageUrl = `${process.env.PUBLIC_URL}/assets/hero/healthCare.png`;

  return (
    <div
      className='object-cover '
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <Navbar />
      <div className='sm:px-8 pt-[300px] pb-[89px] px-[163px] text-white '>
        <div className='xl:justify-between xl:flex'>
          <div className='sm:text-[40px] xl:text-[64px] xl:w-[1022px]'>
            Over a long period of work we have provided hundres of thousands of
            eye care services
          </div>
          <div className='flex items-center text-[20px] py-[74.5px] pl-[113px] text-end'>
            It is a long established fact that a reader will be distracted by
            the readable.
          </div>
        </div>
        <div className='flex justify-end mt-[50px]'>
          <button className='border-[1px] rounded-full p-[10px] size-[100px]'>
            play
          </button>
        </div>
        <div className='flex justify-between mt-[50.5px]'>
          <div className='w-[548px] h-[277px] flex flex-col justify-between p-[30px] bg-[#04726C]'>
            <div className='text-[20px]'>
              Take the discount for the first visit of an ophthalmologist
            </div>
            <div className='flex justify-between'>
              <div className='text-[54px]'>20%</div>
              <div className=''>
                <Button
                  className='border-white bg-white h-[64px] text-[18px] border-[1px] text-[#04726C]'
                  buttonText='Make an appointment'
                />
              </div>
            </div>
          </div>
          <div className='pt-[137px] text-center'>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/hero/circleMultiple.png`}
                alt='img'
              />{' '}
            </div>
            <div>100k</div>
            <div className='text-[#D9D9D9]'>Satisfied customers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
