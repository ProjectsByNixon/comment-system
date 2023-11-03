import { Button } from '@/components/Button';
import { ButtonLink } from '@/components/Button/Button';
import { Input } from '@/components/Input';
import { Spacer, Wrapper } from '@/components/Layout';
import { fetcher } from '@/lib/fetch';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import toast from 'react-hot-toast';

const NewPassword = ({ token }) => {
  const passwordRef = useRef();
  // 'loading' | 'success'
  const [status, setStatus] = useState();
  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setStatus('loading');
      try {
        await fetcher('/api/user/password/reset', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            token,
            password: passwordRef.current.value,
          }),
        });
        setStatus('success');
      } catch (e) {
        toast.error(e.message);
        setStatus(undefined);
      }
    },
    [token]
  );
  return (
    <div className="max-w-screen-sm w-full relative flex flex-col flex-1 self-center pt-12 p-6">
      <h1 className="text-[2rem] font-bold text-center mb-0">Reset Password</h1>
      {status === 'success' ? (
        <>
          <p className="text-base text-[color:var(--secondary)] text-center leading-tight">
            Your password has been updated successfully.
          </p>
        </>
      ) : (
        <>
          <p className="text-base text-[color:var(--secondary)] text-center leading-tight">
            Enter a new password for your account
          </p>
          <Spacer size={1} />
          <form onSubmit={onSubmit}>
            <Input
              ref={passwordRef}
              htmlType="password"
              autoComplete="new-password"
              placeholder="New Password"
              ariaLabel="New Password"
              size="large"
              required
            />
            <Spacer size={0.5} axis="vertical" />
            <Button
              htmlType="submit"
              className="w-full"
              type="success"
              size="large"
            >
              Reset Password
            </Button>
          </form>
        </>
      )}
      <Spacer size={0.25} axis="vertical" />
      <Link href="/login" passHref>
        <ButtonLink type="success" size="large" variant="ghost">
          Return to login
        </ButtonLink>
      </Link>
    </div>
  );
};

const BadLink = () => {
  return (
    <div className="max-w-screen-sm w-full relative flex flex-col flex-1 self-center pt-12 p-6">
      <h1 className="text-[2rem] font-bold text-center mb-0">Invalid Link</h1>
      <p className="text-base text-[color:var(--secondary)] text-center leading-tight">
        It looks like you may have clicked on an invalid link. Please close this
        window and try again.
      </p>
      <Spacer size={1} />
      <Link href="/login" passHref>
        <ButtonLink type="success" size="large" variant="ghost">
          Return to login
        </ButtonLink>
      </Link>
    </div>
  );
};

const ForgetPasswordToken = ({ valid, token }) => {
  return (
    <Wrapper className="flex flex-col justify-center h-[calc(100vh_-_var(--nav-height))]">
      {valid ? <NewPassword token={token} /> : <BadLink />}
    </Wrapper>
  );
};

export default ForgetPasswordToken;
