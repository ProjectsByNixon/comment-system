import { Button } from '@/components/Button';
import { Container, Spacer } from '@/components/Layout';
import Wrapper from '@/components/Layout/Wrapper';
import { Post } from '@/components/Post';
import { Text } from '@/components/Text';
import { usePostPages } from '@/lib/post';
import Link from 'next/link';

const UserPosts = ({ user }) => {
  const { data, size, setSize, isLoadingMore, isReachingEnd } = usePostPages({
    creatorId: user._id,
  });
  const posts = data
    ? data.reduce((acc, val) => [...acc, ...val.posts], [])
    : [];

  return (
    <div className="pb-16">
      <Spacer axis="vertical" size={1} />
      <Wrapper>
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/user/${post.creator.username}/post/${post._id}`}
          >
            <a className="block no-underline mb-[21px]">
              <Post
                className="transition-[ease] duration-[0.15s] ease-[background] bg-[var(--accents-1)]"
                post={post}
              />
            </a>
          </Link>
        ))}
        <Container justifyContent="center">
          {isReachingEnd ? (
            <Text color="secondary">No more posts are found</Text>
          ) : (
            <Button
              variant="ghost"
              type="success"
              loading={isLoadingMore}
              onClick={() => setSize(size + 1)}
            >
              Load more
            </Button>
          )}
        </Container>
      </Wrapper>
    </div>
  );
};

export default UserPosts;
