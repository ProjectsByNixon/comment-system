import { Spacer } from '@/components/Layout';
import PostList from './PostList';
import Poster from './Poster';

export const Feed = () => {
  return (
    <div className="min-h-[calc(100vh)]">
      <Spacer size={1} axis="vertical" />
      <Poster />
      <PostList />
    </div>
  );
};
