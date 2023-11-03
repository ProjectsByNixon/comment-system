import clsx from 'clsx';
import { forwardRef } from 'react';

export const Text = forwardRef(function Text(
  { color, children, className, as, ...props },
  ref
) {
  const Component = as || 'p';
  return (
    <Component
      style={color ? { '--color': `var(--${color})` } : undefined}
      className={clsx(
        'text-[color:var(--color)] leading-[normal] m-0',
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
    </Component>
  );
});

export const TextLink = forwardRef(function Text(
  { color, children, className, href, onClick, variant },
  ref
) {
  return (
    <a
      style={color ? { '--color': `var(--${color})` } : undefined}
      className={clsx(
        'text-[color:var(--color)] leading-[normal] m-0',
        'no-underline cursor-pointer',
        variant,
        className
      )}
      href={href}
      ref={ref}
      onClick={onClick}
    >
      {children}
    </a>
  );
});
