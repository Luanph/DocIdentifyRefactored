'use client';

import * as React from 'react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef(
  ({ className, type, id, nomeLabel, ...props }, ref) => {
    const [isInputFocused, setInputFocused] = useState(false);

    const handleFocus = () => {
      setInputFocused(true);
    };

    const handleBlur = () => {
      setInputFocused(false);
    };

    return (
      <div>
        <label
          className={`text-xl ${isInputFocused ? 'text-[#A881E6]' : ''}`}
          htmlFor={id}
        >
          {nomeLabel}
        </label>
        <input
          type={type}
          id={id}
          className={cn(
            'mt-3 w-full outline-none rounded-[0.6rem] border border-solid border-[#252529] bg-[#111112] p-[1.2rem] gap-1 text-[#FBF9FE] text-xl focus:outline-[#A881E6]',
            className,
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
