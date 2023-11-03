const Avatar = ({ size, username, url }) => {
  return (
    <img
      className="inline-flex justify-center items-center text-[color:var(--accents-6)] font-[bold] overflow-hidden border border-[color:var(--accents-2)] rounded-[100%] border-solid"
      src={url || '/images/default_user.jpg'}
      alt={username}
      width={size}
      height={size}
    />
  );
};

export default Avatar;
