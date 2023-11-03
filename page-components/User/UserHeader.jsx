import { Avatar } from '@/components/Avatar';
import { Container } from '@/components/Layout';

const UserHeader = ({ user }) => {
  return (
    <Container
      className="shadow-[var(--shadow-large)] max-w-[720px] bg-[color:var(--background)] mt-0 mb-[18px] mx-auto p-8 rounded-lg"
      column
      alignItems="center"
    >
      <div className="mt-6 mb-3 mx-0">
        <Avatar size={168} username={user.username} url={user.profilePicture} />
      </div>
      <h1>
        <div className="text-[2.5rem] text-center text-[color:var(--accents-8)]">
          {user.name}
        </div>
        <div className="text-2xl text-[color:var(--success)] text-center">
          @{user.username}
        </div>
      </h1>
      <p className="text-[color:var(--secondary)] text-center leading-normal">
        {user.bio}
      </p>
    </Container>
  );
};

export default UserHeader;
