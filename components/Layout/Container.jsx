import clsx from 'clsx';

const Container = ({
  justifyContent,
  flex,
  alignItems,
  column,
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        'flex flex-row relative min-w-[1px] max-w-full',
        column && 'flex-col',
        className
      )}
      style={{
        justifyContent,
        flex,
        alignItems,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
