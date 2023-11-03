import { Avatar } from '@/components/Avatar';
import { Button, ButtonLink } from '@/components/Button';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { fetcher } from '@/lib/fetch';
import { useCurrentUser } from '@/lib/user';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import Container from './Container';
import Spacer from './Spacer';
import Wrapper from './Wrapper';

const UserMenu = ({ user, mutate }) => {
  const menuRef = useRef();
  const avatarRef = useRef();

  const [visible, setVisible] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const onRouteChangeComplete = () => setVisible(false);
    router.events.on('routeChangeComplete', onRouteChangeComplete);
    return () =>
      router.events.off('routeChangeComplete', onRouteChangeComplete);
  });

  useEffect(() => {
    // detect outside click to close menu
    const onMouseDown = (event) => {
      if (
        !menuRef.current.contains(event.target) &&
        !avatarRef.current.contains(event.target)
      ) {
        setVisible(false);
      }
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
    };
  }, []);

  const onSignOut = useCallback(async () => {
    try {
      await fetcher('/api/auth', {
        method: 'DELETE',
      });
      toast.success('You have been signed out');
      mutate({ user: null });
    } catch (e) {
      toast.error(e.message);
    }
  }, [mutate]);

  return (
    <div className="relative">
      <button
        className="cursor-pointer p-0 border-[none]"
        ref={avatarRef}
        onClick={() => setVisible(!visible)}
      >
        <Avatar size={32} username={user.username} url={user.profilePicture} />
      </button>
      <div
        ref={menuRef}
        role="menu"
        aria-hidden={visible}
        className="absolute z-20 right-0 top-full bg-[color:var(--background)] shadow-[var(--shadow-medium)] rounded-[5px] border border-[color:var(--accents-2)] border-solid"
      >
        {visible && (
          <div className="text-[color:var(--foreground)] shadow-[var(--shadow-medium)] inline-block min-w-[220px] rounded-[5px]">
            <Link passHref href={`/user/${user.username}`}>
              <a className="apply cursor-pointer text-[color:var(--accents-5)] block w-full items-center no-underline text-sm text-left duration-[0.2s] transition-[background_color] px-5 py-3.5 p-0 border-[none] bg-none focus:text-[color:var(--foreground)] focus:bg-[color:var(--accents-1)] hover:text-[color:var(--foreground)] hover:bg-[color:var(--accents-1)]">
                Profile
              </a>
            </Link>
            <Link passHref href="/settings">
              <a className="apply cursor-pointer text-[color:var(--accents-5)] block w-full items-center no-underline text-sm text-left duration-[0.2s] transition-[background_color] px-5 py-3.5 p-0 border-[none] bg-none focus:text-[color:var(--foreground)] focus:bg-[color:var(--accents-1)] hover:text-[color:var(--foreground)] hover:bg-[color:var(--accents-1)]">
                Settngs
              </a>
            </Link>
            <div className="apply text-[color:var(--accents-5)] block w-full items-center no-underline text-sm text-left duration-[0.2s] transition-[background_color] px-5 py-3.5 p-0 border-[none] bg-none focus:text-[color:var(--foreground)] focus:bg-[color:var(--accents-1)] hover:text-[color:var(--foreground)] hover:bg-[color:var(--accents-1)]">
              <Container alignItems="center">
                <span>Theme</span>
                <Spacer size={0.5} axis="horizontal" />
                <ThemeSwitcher />
              </Container>
            </div>
            <button
              onClick={onSignOut}
              className="apply cursor-pointer text-[color:var(--accents-5)] block w-full items-center no-underline text-sm text-left duration-[0.2s] transition-[background_color] px-5 py-3.5 p-0 border-[none] bg-none focus:text-[color:var(--foreground)] focus:bg-[color:var(--accents-1)] hover:text-[color:var(--foreground)] hover:bg-[color:var(--accents-1)]"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Nav = () => {
  const { data: { user } = {}, mutate } = useCurrentUser();

  return (
    <nav className="h-[var(--nav-height)] fixed w-full z-10 bg-[color:var(--header-background)] shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.1)] backdrop-saturate-[180%] backdrop-blur-[5px] left-0 top-0 dark:shadow-[inset_0_-1px_0_0_hsla(0,0%,100%,0.1)] border border-[color:var(--accents-2)] border-solid">
      <Wrapper className="h-full">
        <Container
          className="h-full w-full px-6"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href="/">
            <a className="font-extrabold text-[color:var(--foreground)] no-underline">
              Comments App
            </a>
          </Link>
          <Container>
            {user ? (
              <>
                <UserMenu user={user} mutate={mutate} />
              </>
            ) : (
              <>
                <Link passHref href="/login">
                  <ButtonLink
                    size="small"
                    type="success"
                    variant="ghost"
                    color="link"
                  >
                    Log in
                  </ButtonLink>
                </Link>
                <Spacer axis="horizontal" size={0.25} />
                <Link passHref href="/sign-up">
                  <Button size="small" type="success">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </Container>
        </Container>
      </Wrapper>
    </nav>
  );
};

export default Nav;
