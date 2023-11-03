// import { Avatar } from '@/components/Avatar';
// import { Button } from '@/components/Button';
// import { Input } from '@/components/Input';
// import { Container, Wrapper } from '@/components/Layout';
// import { LoadingDots } from '@/components/LoadingDots';
// import { Text, TextLink } from '@/components/Text';
// import { fetcher } from '@/lib/fetch';
// import { usePostPages } from '@/lib/post';
// import { useCurrentUser } from '@/lib/user';
// import Link from 'next/link';
// import { useCallback, useRef, useState } from 'react';
// import toast from 'react-hot-toast';
// import styles from './Poster.module.css';

// const PosterInner = ({ user }) => {
//   const contentRef = useRef();
//   const [isLoading, setIsLoading] = useState(false);

//   const { mutate } = usePostPages();

//   const onSubmit = useCallback(
//     async (e) => {
//       e.preventDefault();
//       try {
//         setIsLoading(true);
//         await fetcher('/api/posts', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ content: contentRef.current.value }),
//         });
//         toast.success('You have posted successfully');
//         contentRef.current.value = '';
//         // refresh post lists
//         mutate();
//       } catch (e) {
//         toast.error(e.message);
//       } finally {
//         setIsLoading(false);
//       }
//     },
//     [mutate]
//   );

//   return (
//     <form onSubmit={onSubmit}>
//       <Container className={styles.poster}>
//         <Avatar size={40} username={user.username} url={user.profilePicture} />
//         <Input
//           ref={contentRef}
//           className={styles.input}
//           placeholder={`What's on your mind, ${user.name}?`}
//           ariaLabel={`What's on your mind, ${user.name}?`}
//         />
//         <Button type="success" loading={isLoading}>
//           Post
//         </Button>
//       </Container>
//     </form>
//   );
// };

// const Poster = () => {
//   const { data, error } = useCurrentUser();
//   const loading = !data && !error;

//   return (
//     <Wrapper>
//       <div className={styles.root}>
//         <h3 className={styles.heading}>Share your thoughts</h3>
//         {loading ? (
//           <LoadingDots>Loading</LoadingDots>
//         ) : data?.user ? (
//           <PosterInner user={data.user} />
//         ) : (
//           <Text color="secondary">
//             Please{' '}
//             <Link href="/login" passHref>
//               <TextLink color="link" variant="highlight">
//                 sign in
//               </TextLink>
//             </Link>{' '}
//             to post
//           </Text>
//         )}
//       </div>
//     </Wrapper>
//   );
// };

// export default Poster;

import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Container, Wrapper } from '@/components/Layout';
import { LoadingDots } from '@/components/LoadingDots';
import { Text, TextLink } from '@/components/Text';
import { fetcher } from '@/lib/fetch';
import { usePostPages } from '@/lib/post';
import { useCurrentUser } from '@/lib/user';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import toast from 'react-hot-toast';

const PosterInner = ({ user }) => {
  const contentRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = usePostPages();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setIsLoading(true);
        await fetcher('/api/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: contentRef.current.value }),
        });
        toast.success('You have posted successfully');
        contentRef.current.value = '';
        // refresh post lists
        mutate();
      } catch (e) {
        toast.error(e.message);
      } finally {
        setIsLoading(false);
      }
    },
    [mutate]
  );

  return (
    <form onSubmit={onSubmit}>
      <Container className="w-full">
        <span className="hidden md:block">
          <Avatar
            size={40}
            username={user.username}
            url={user.profilePicture}
          />
        </span>
        <Input
          ref={contentRef}
          className="flex-1 mr-8 md:ml-8"
          placeholder={`What's on your mind, ${user.name}?`}
          ariaLabel={`What's on your mind, ${user.name}?`}
        />
        <Button type="success" loading={isLoading}>
          Post
        </Button>
      </Container>
    </form>
  );
};

const Poster = () => {
  const { data, error } = useCurrentUser();
  const loading = !data && !error;

  return (
    <Wrapper>
      <div className="shadow-[0px_2px_4px_rgba(0,0,0,0.1)] h-[132px] transition-[ease] duration-[0.2s] ease-[box-shadow] md:p-8 rounded-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
        <h3 className="text-base font-bold text-secondary pb-4">
          Create a post
        </h3>
        {loading ? (
          <LoadingDots>Loading</LoadingDots>
        ) : data?.user ? (
          <PosterInner user={data.user} />
        ) : (
          <Text color="secondary">
            Please{' '}
            <Link href="/login" passHref>
              <TextLink className="text-link highlight" variant="highlight">
                sign in
              </TextLink>
            </Link>{' '}
            to post
          </Text>
        )}
      </div>
    </Wrapper>
  );
};

export default Poster;
