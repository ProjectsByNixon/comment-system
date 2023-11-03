import clsx from 'clsx';
import { forwardRef } from 'react';

const Input = forwardRef(function Input(
  {
    label,
    placeholder,
    className,
    htmlType,
    autoComplete,
    size,
    ariaLabel,
    required,
  },
  ref
) {
  return (
    <div className={clsx('flex text-sm items-center max-w-full', className)}>
      <label className="w-full">
        {label && (
          <div className="block text-xs font-medium text-[color:var(--secondary)] uppercase max-w-full mb-2">
            {label}
          </div>
        )}
        <input
          type={htmlType}
          autoComplete={autoComplete}
          placeholder={placeholder}
          ref={ref}
          className={clsx(
            'w-full min-w-0 inline-flex border border-[color:var(--accents-2)] text-[color:var(--foreground)] h-10 transition-[border-color] duration-[0.15s] ease-[ease] px-3 py-0 rounded-[5px] border-solid focus:border-[color:var(--accents-5)]',
            size
          )}
          aria-label={ariaLabel}
          required={required}
        />
      </label>
    </div>
  );
});

export default Input;
