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
      title: 'Primary Care',
      description:
        'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut',
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
    <div className='px-[163px] pb-[150px]'>
      <div className='flex justify-between text-[18px]'>
        <div className='w-[674px]'>
          <div className='text-[#04726C]'>Our Service</div>
          <div className='text-[52px] font-bold'>
            The best quality service for your familiy
          </div>
        </div>
        <div className='w-[674px] flex items-center justify-end'>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum
        </div>
      </div>
      <div className='grid grid-cols-3 mt-[50px] gap-[30px] '>
        {serviceData.map((item, index) => (
          <div
            key={index}
            className='group hover:bg-[#04726C] hover:text-white flex flex-col gap-[20px] p-[30px] text-[18px] border-[1px] border-[#EBEBEB]'
          >
            <div className='flex text-[28px] gap-[30px] items-center'>
              <img
                src={`${process.env.PUBLIC_URL}${item.image}`}
                alt='icon'
                className='size-16 hover:filter hover:brightness-[0] hover:saturate-[100%] hover:invert-[100%] hover:sepia-[0%] '
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(33%) sepia(42%) saturate(1459%) hue-rotate(137deg) brightness(88%) contrast(97%)',
                }}
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
