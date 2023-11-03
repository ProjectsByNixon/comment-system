import { Avatar } from '@/components/Avatar';
import { Container } from '@/components/Layout';
import { format } from '@lukeed/ms';
import clsx from 'clsx';
import Link from 'next/link';
import { useMemo } from 'react';
import styles from './Comment.module.css';

const Comment = ({ comment, className }) => {
  const timestampTxt = useMemo(() => {
    const diff = Date.now() - new Date(comment.createdAt).getTime();
    if (diff < 1 * 60 * 1000) return 'Just now';
    return `${format(diff, true)} ago`;
  }, [comment.createdAt]);
  return (
    <div
      className={clsx(
        'relative box-border border border-[color:var(--accents-2)] shadow-[var(--shadow-smallest)_0px_2px_4px_rgb(0_0_0_/_10%)] p-4 rounded-[5px] border-solid',
        className
      )}
    >
      <Link href={`/user/${comment.creator.username}`}>
        <a className="no-underline">
          <Container className="inline-flex">
            <Avatar
              size={36}
              url={comment.creator.profilePicture}
              username={comment.creator.username}
            />
            <Container column className="ml-2">
              <p className="text-sm font-semibold text-[color:var(--foreground)] leading-5 m-0">
                {comment.creator.name}
              </p>
              <p className="text-sm font-normal text-[color:var(--secondary)] leading-5 m-0">
                {comment.creator.username}
              </p>
            </Container>
          </Container>
        </a>
      </Link>
      <div className="mt-4">
        <p className={styles.content}>{comment.content}</p>
      </div>
      <div className="mt-4">
        <time
          dateTime={String(comment.createdAt)}
          className="text-sm font-normal leading-5 text-[color:var(--accents-5)] m-0"
        >
          {timestampTxt}
        </time>
      </div>
    </div>
  );
};

export default Comment;
