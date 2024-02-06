import React from 'react';

const Footer = () => {
  return (
    <div className='px-[163px] pb-[150px] bg-[#04726C] mt-[-1px] text-white'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-[50px]'>
          <div className='text-[28px]'>Sitemap</div>
          <div className='flex gap-[50px] text-lg'>
            <div className='flex flex-col gap-5'>
              <div className=''>Home</div>
              <div className=''>Service</div>
              <div className=''>About Us</div>
            </div>
            <div className='flex flex-col gap-5'>
              <div className=''>How it works</div>
              <div className=''>Doctors</div>
              <div className=''>Gallery</div>
            </div>
            <div className='flex flex-col gap-5'>
              <div className=''>Blog</div>
              <div className=''>Address</div>
              <div className=''>Contact</div>
            </div>
          </div>
          <div className='text-[16px]'>
            © 2022 Health Clinic. With Love By Elmous
          </div>
        </div>
        <div className='flex flex-col gap-[50px]'>
          <div className='text-[28px] text-end'>We are on social media</div>
          <div className='flex items-center justify-end gap-12'>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/footer/iconTwitter.png`}
                alt='img'
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/footer/iconYoutube.png`}
                alt='img'
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/footer/iconLinkedin.png`}
                alt='img'
              />
            </div>
          </div>
          <div className='flex gap-5 text-lg '>
            <div>Privacy policy</div>
            <div>Term & conditions</div>
            <div>Help Centre</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
