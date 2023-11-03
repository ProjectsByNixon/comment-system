import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Container } from '@/components/Layout';
import { LoadingDots } from '@/components/LoadingDots';
import { Text, TextLink } from '@/components/Text';
import { useCommentPages } from '@/lib/comment';
import { fetcher } from '@/lib/fetch';
import { useCurrentUser } from '@/lib/user';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import toast from 'react-hot-toast';

const CommenterInner = ({ user, post }) => {
  const contentRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useCommentPages({ postId: post._id });

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setIsLoading(true);
        await fetcher(`/api/posts/${post._id}/comments`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: contentRef.current.value }),
        });
        toast.success('You have added a comment');
        contentRef.current.value = '';
        // refresh post lists
        mutate();
      } catch (e) {
        toast.error(e.message);
      } finally {
        setIsLoading(false);
      }
    },
    [mutate, post._id]
  );

  return (
    <form onSubmit={onSubmit}>
      <Container className="w-full">
        <Avatar size={40} username={user.username} url={user.profilePicture} />
        <Input
          ref={contentRef}
          className="flex-1 mx-2"
          placeholder="Add your comment"
          ariaLabel="Add your comment"
        />
        <Button type="success" loading={isLoading}>
          Comment
        </Button>
      </Container>
    </form>
  );
};

const Commenter = ({ post }) => {
  const { data, error } = useCurrentUser();
  const loading = !data && !error;

  return (
    <div className="bg-[var(--background)] apply shadow-[var(--shadow-smallest)] h-[132px] transition-[ease] duration-[0.2s] ease-[box-shadow] p-8 rounded-lg hover:shadow-[var(--shadow-medium)]">
      <h3 className="text-[0.85rem] text-[color:var(--accents-6)] mt-0 pl-[0.2rem]">
        Replying to{' '}
        <Link href={`/user/${post.creator.username}`} passHref>
          <TextLink color="link">@{post.creator.username}</TextLink>
        </Link>
      </h3>
      {loading ? (
        <LoadingDots>Loading</LoadingDots>
      ) : data?.user ? (
        <CommenterInner post={post} user={data.user} />
      ) : (
        <Text color="secondary">
          Please{' '}
          <Link href="/login" passHref>
            <TextLink color="link" variant="highlight">
              sign in
            </TextLink>
          </Link>{' '}
          to comment
        </Text>
      )}
    </div>
  );
};

export default Commenter;
