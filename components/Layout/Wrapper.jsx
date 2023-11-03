import clsx from 'clsx';

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'max-w-full w-[1048px] mx-auto my-0 px-6 py-0',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
