import React from 'react';
import Contact from '../section7';

const Footer = () => {
  return (
    <div className='sm:px-5 xl:px-[163px] py-[150px] bg-[#04726C] mt-[-1px] text-white'>
      <Contact />
      <div className='xl:flex xl:justify-between pt-[100px]'>
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
          <div
            className='xl:block
          sm:hidden text-[16px]'
          >
            © 2022 Health Clinic. With Love By Elmous
          </div>
        </div>
        <div className='flex flex-col gap-[50px]'>
          <div className='text-[28px] xl:text-end'>We are on social media</div>
          <div className='flex items-center gap-12 xl:justify-end'>
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
        <div
          className='sm:block sm:text-[16px] sm:mt-10
        xl:hidden'
        >
          © 2022 Health Clinic. With Love By Elmous
        </div>
      </div>
    </div>
  );
};

export default Footer;
