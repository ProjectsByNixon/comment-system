import { Avatar } from '@/components/Avatar';
import { Container } from '@/components/Layout';
import { format } from '@lukeed/ms';
import clsx from 'clsx';
import Link from 'next/link';
import { useMemo } from 'react';

const Post = ({ post, className }) => {
  const timestampTxt = useMemo(() => {
    const diff = Date.now() - new Date(post.createdAt).getTime();
    if (diff < 1 * 60 * 1000) return 'Just now';
    return `${format(diff, true)} ago`;
  }, [post.createdAt]);
  return (
    <div
      className={clsx(
        'relative box-border border border-[color:var(--accents-2)] shadow-[var(--shadow-smallest)] p-4 rounded-[5px] border-solid bg-[var(--background)] hover:bg-[color:var(--accents-1)] transition-[background-color] duration-[0.2s] ease-[background-color] hover:shadow-[var(--shadow-medium)]',
        className
      )}
    >
      <Link href={`/user/${post.creator.username}`}>
        <a className="no-underline">
          <Container className="inline-flex">
            <Avatar
              size={40}
              url={post.creator.profilePicture}
              username={post.creator.username}
            />
            <Container column className="ml-4">
              <p className="text-sm font-semibold text-[color:var(--foreground)] leading-5 m-0">
                {post.creator.name}
              </p>
              <p className="text-sm font-normal text-[color:var(--secondary)] leading-5 m-0">
                {post.creator.username}
              </p>
            </Container>
          </Container>
        </a>
      </Link>
      <div className="mt-4">
        <p className="text-[color:var(--accents-6)] font-medium text-sm text-ellipsis overflow-hidden">
          {post.content}
        </p>
      </div>
      <div className="mt-4">
        <time
          dateTime={String(post.createdAt)}
          className="text-sm font-normal leading-5 text-[color:var(--accents-5)] m-0"
        >
          {timestampTxt}
        </time>
      </div>
    </div>
  );
};

export default Post;
