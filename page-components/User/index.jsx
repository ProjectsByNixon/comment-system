import UserHeader from './UserHeader';
import UserPosts from './UserPosts';

export const User = ({ user }) => {
  return (
    <div className="px-0 py-[18px]">
      <UserHeader user={user} />
      <UserPosts user={user} />
    </div>
  );
};
