import React from 'react';

const OurService = () => {
  const serviceData = [
    {
      image: 'assets/section2/iconPrimary.png',
      title: 'Primary Care',
      description:
        'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut',
    },
    {
      image: 'assets/section2/iconHeart.png',
      title: 'Heart Care',
      description:
        'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized',
    },
    {
      image: 'assets/section2/iconDermatology.png',
      title: 'Dermatology',
      description:
        'Equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain',
    },

    {
      image: 'assets/section2/iconUrology.png',
      title: 'Urology',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
    },
    {
      image: 'assets/section2/iconSurgery.png',
      title: 'Surgery',
      description:
        'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit',
    },
    {
      image: 'assets/section2/iconOrthopedics.png',
      title: 'Orthopedics',
      description:
        'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint',
    },
  ];

  return (
    <div className='sm:p-3 xl:px-[163px] pb-[150px]'>
      <div className='xl:flex xl:justify-between text-[18px]'>
        <div className='w-[674px]'>
          <div className='text-[#04726C]'>Our Service</div>
          <div className='sm:text-[45px] xl:text-[52px] font-bold'>
            The best quality service for your familiy
          </div>
        </div>
        <div className='w-[674px] flex items-center justify-end'>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum
        </div>
      </div>
      <div className=' xl:grid xl:grid-cols-3 mt-[50px] gap-[30px] '>
        {serviceData.map((item, index) => (
          <div
            key={index}
            className='group hover:bg-[#04726C] hover:text-white flex flex-col gap-[20px] p-[30px] text-[18px] border-[1px] border-[#EBEBEB]'
          >
            <div className='flex text-[28px] gap-[30px] items-center'>
              <img
                src={`${process.env.PUBLIC_URL}${item.image}`}
                alt='icon'
                className={`size-16 
                group-hover:filter 
                group-hover:brightness-[0] 
                group-hover:saturate-[100%] 
                group-hover:invert-[100%] 
                group-hover:sepia-[0%]
                z-0`}
              />

              {item.title}
            </div>
            <div className=''>{item.description}</div>
            <div className='underline cursor-pointer text-[#04726C] group-hover:text-white '>
              Learn More
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
