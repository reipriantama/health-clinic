import React from 'react';


const Button = ({ className, buttonText, imageSrc }) => {
  return (
    <div>
      <button
        className={`flex gap-[10px] px-[25px] items-center rounded-full ${className}`}
      >
        {imageSrc && <img src={imageSrc} alt={buttonText} className='w-6 h-6' />} 
        <div>{buttonText}</div>
      </button>
    </div>
  );
};

export default Button;
