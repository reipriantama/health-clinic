import React from 'react';
import Button from '../ui/button';

const OurDoctors = () => {
  const dataDoctors = [
    {
      image: '/assets/section4/doctor1.png',
      name: 'Anika Donin',
      experience: '8',
    },
    {
      image: '/assets/section4/doctor2.png',
      name: 'Angel Culhane',
      experience: '7',
    },
    {
      image: '/assets/section4/doctor6.png',
      name: 'Ahmad Septimus',
      experience: '6',
    },
    {
      image: '/assets/section4/doctor4.png',
      name: 'Nolan Passaquindici Arcand',
      experience: '10',
    },
    {
      image: '/assets/section4/doctor3.png',
      name: 'Giana Torff',
      experience: '5',
    },
    {
      image: '/assets/section4/doctor7.png',
      name: 'Martin Philips',
      experience: '3',
    },
    {
      image: '/assets/section4/doctor5.png',
      name: 'James Ekstrom Bothman',
      experience: '10',
    },
    {
      image: '/assets/section4/doctor8.png',
      name: 'Makenna Schleifer',
      experience: '10',
    },
  ];

  return (
    <div className='px-[162px] pb-[150px] text-[18px]'>
      <div className='flex justify-between'>
        <div className='w-[945px] flex flex-col gap-[10px]'>
          <div className='text-[#04726C]'>Our Doctors</div>
          <div className='text-[52px] font-bold'>
            Meet our specialists surgeons and ophthalmologists
          </div>
        </div>
        <div className='flex items-center'>
          <Button
            className='px-[25px] py-5 flex justify-center bg-[#04726C] text-base border-[1px] text-[#FFFFFF] '
            buttonText='All doctors'
          />
        </div>
      </div>
      <div className='mt-[50px] grid grid-cols-4 gap-[50px]'>
        {dataDoctors.map((item, index) => (
          <div className='w-[377px] h-[548px] flex flex-col gap-[30px]'>
            <div className=''>
              <img
                src={`${process.env.PUBLIC_URL}${item.image}`}
                alt='img'
                className='w-[376px] h-[442px] object-cover'
              />
            </div>
            <div>
              <div className='text-[28px] '>{item.name}</div>
              <div className='text-[#232323]'>
                Work experience - {item.experience} years
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurDoctors;
