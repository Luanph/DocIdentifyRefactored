import React from 'react';

export default function InputFile({ className, type, id, ...props }) {
  return (
    <input
      type={type}
      id={id}
      className={`text-[#FBF9FE] text-xl opacity w-full h-full absolute opacity-0 z-10 ${className}`}
      {...props}
    />
  );
}
