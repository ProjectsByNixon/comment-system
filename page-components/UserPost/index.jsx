import { Spacer, Wrapper } from '@/components/Layout';
import { Post as PostItem } from '@/components/Post';
import CommentList from './CommentList';
import Commenter from './Commenter';

export const UserPost = ({ post }) => {
  return (
    <Wrapper>
      <Spacer size={2} axis="vertical" />
      <PostItem post={post} />
      <h3 className="text-[1.1rem] tracking-[-0.029375rem] font-semibold text-[color:var(--accents-6)] pt-8">
        Comments
      </h3>
      <Commenter post={post} />
      <CommentList post={post} />
    </Wrapper>
  );
};
