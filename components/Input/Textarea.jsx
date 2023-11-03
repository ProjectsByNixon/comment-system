import clsx from 'clsx';
import { forwardRef } from 'react';

const Textarea = forwardRef(function TextArea(
  {
    label,
    placeholder,
    className,
    htmlType,
    autoComplete,
    ariaLabel,
    required,
  },
  ref
) {
  return (
    <div className={clsx('flex text-sm items-center max-w-full', className)}>
      <label>
        {label && (
          <div className="block text-xs font-medium text-[color:var(--secondary)] uppercase max-w-full mb-2">
            {label}
          </div>
        )}
        <textarea
          type={htmlType}
          autoComplete={autoComplete}
          placeholder={placeholder}
          ref={ref}
          className={clsx(
            'bg-transparent shadow-none box-border block text-sm leading-[1.7] h-full min-h-[100px] resize-none w-full text-[color:var(--geist-foreground)] border px-2.5 py-[7px] rounded-[5px] border-[none] border-solid font-sans'
          )}
          aria-label={ariaLabel}
          required={required}
        />
      </label>
    </div>
  );
});

export default Textarea;
