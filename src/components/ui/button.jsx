import React from 'react';

const Button = ({ className, buttonText, imageSrc, arrow, flag, dropDown }) => {
  return (
    <div>
      <button
        className={`flex gap-[10px] px-[25px] items-center rounded-full ${className}`}
      >
        {imageSrc && (
          <img src={imageSrc} alt={buttonText} className='w-6 h-6' />
        )}
        {flag && (
          <img
            src={`${process.env.PUBLIC_URL}/assets/navbar/ukFlag.png`}
            alt='iconFlag'
          ></img>
        )}
        <div>{buttonText}</div>
        {arrow && (
          <img
            src={`${process.env.PUBLIC_URL}/assets/navbar/arrowRight.png`}
            alt='arrowRight'
          />
        )}
        {dropDown && (
          <img
            src={`${process.env.PUBLIC_URL}/assets/navbar/arrowDown.png`}
            alt='arrowDown'
          />
        )}
      </button>
    </div>
  );
};

export default Button;
