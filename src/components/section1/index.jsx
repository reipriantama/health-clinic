import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import Button from '../ui/button';

const Solution = () => {
  const doctorData = [
    {
      image: '',
      name: 'John',
      specialist: 'Vascular Surgery',
    },
    {
      image: '',
      name: 'Dee',
      specialist: 'Transplantation Surgery',
    },
    {
      image: '',
      name: 'Eddie',
      specialist: 'Family Practice',
    },
  ];

  return (
    <div className='py-[150px] pl-[116px] pr-[219px] flex justify-between'>
      <div className='flex'>
        <div className=' shadow-top'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/section1/doctor.png`}
            alt=''
            className='w-[753px] h-[665px] object-cover'
          />
        </div>
        <div className='w-[341px] h-[412px] p-[30px] ml-[400px] mt-[63px] absolute flex flex-col gap-[30px] border-[1px] border-[#EBEBEB] bg-white shadow-lg'>
          <div className='flex justify-between'>
            <div>
              <div className='text-[20px]'>Available doctor</div>
              <div className='text-[18px] text-[#04726C]'>Select doctor</div>
            </div>
            <div className='flex items-center cursor-pointer'>
              <BsThreeDots className='text-4xl' />
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            {doctorData.map((item, index) => (
              <div key={index} className='flex gap-5'>
                <div className='size-12 rounded-full border-[1px] border-[#04726C]'>
                  {item.image}
                </div>
                <div>
                  <div>{item.name}</div>
                  <div className='text-[14px] text-[#232323]'>
                    {item.specialist}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=''>
            <Button
              className='px-5 py-[15px] flex justify-center bg-[#04726C33] text-base border-[1px] text-[#04726C] w-full'
              buttonText='Find Doctors'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-10 ml-[156px] text-[18px] py-[98px]'>
        <div className='text-[#04726C] mb-[-30px]'>Quick Solution</div>
        <div className='text-[52px] font-bold'>
          Easy same or next-day appointments
        </div>
        <div className='w-[559px] text-[#232323]'>
          Easily make appointment wirh our best doctor for your families in same
          day or the next day
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-5'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/section1/iconCalendar.png`}
              alt='icon'
            />
            Easy Online Booking Here
          </div>
          <div className='flex gap-5'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/section1/iconRate.png`}
              alt='icon'
            />
            Best Quality Appointment Services
          </div>
        </div>
        <div className=''>
          <Button
            className='px-[25px] py-5 flex justify-center bg-[#04726C] text-base border-[1px] text-[#FFFFFF] '
            buttonText='Make an appointment'
          />
        </div>
      </div>
    </div>
  );
};

export default Solution;
