import React from 'react';
import { MdOutlineHorizontalRule } from 'react-icons/md';
import { IoIosStar } from 'react-icons/io';
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './index.css';

const Reviews = () => {
  const reviewData = [
    {
      image: '/assets/section5/imageProfil1.png',
      description: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.”`,
      rate: '4.5',
      name: 'Kaiya Culhane',
    },
    {
      image: '/assets/section5/imageProfil2.png',
      description: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.”`,
      rate: '4',
      name: 'Harriet Wheeler',
    },
    {
      image: '/assets/section5/imageProfil3.png',
      description: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.”`,
      rate: '4.5',
      name: 'Dolores Brian',
    },
  ];

  return (
    <div className='sm:p-5 xl:px-[162px] xl:pb-[150px]'>
      <div className='flex flex-col items-center mb-[50px]'>
        <div className='text-[#04726C]'>Reviews</div>
        <div
          className='sm:text-3xl
         xl:text-[52px] 
         font-bold text-center w-[675px]'
        >
          Feedback from our favorite customers
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {reviewData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='xl:flex '>
              <div className='flex gap-[26px]'>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}${item.image}`}
                    alt='icon'
                    className='size-[120px] opacity-20 object-cover rounded-full'
                  />
                </div>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}${item.image}`}
                    alt='icon'
                    className='size-[120px] opacity-40 object-cover rounded-full'
                  />
                </div>
                <div
                  className='radial-progress text-[#04726C] border-2'
                  style={{
                    '--value': '40',
                    '--size': '120px',
                    '--thickness': '2px',
                  }}
                  role='progressbar'
                >
                  <img
                    src={`${process.env.PUBLIC_URL}${item.image}`}
                    alt='icon'
                    className='size-[120px] object-cover rounded-full'
                  />
                </div>
              </div>
              <div className='w-[821px] flex flex-col gap-[45px] xl:ml-[64px]'>
                <div
                  className='radial-progress text-[#04726C] border-2'
                  style={{
                    '--value': '40',
                    '--size': '70px',
                    '--thickness': '2px',
                  }}
                  role='progressbar'
                >
                  <FaQuoteLeft />
                </div>
                <div
                  className='sm:w-[550px] sm:text-center
                  xl:w-[821px]
                text-[26px] italic'
                >
                  {item.description}
                </div>
                <div className='text-xl'>
                  <div className='flex gap-2'>
                    <IoIosStar className='text-[#FFBD14]' /> {item.rate}
                  </div>
                  <div className='flex items-center gap-2'>
                    <MdOutlineHorizontalRule />
                    {item.name}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
