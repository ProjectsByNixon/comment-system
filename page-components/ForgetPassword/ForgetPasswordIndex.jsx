import { Button } from '@/components/Button';
import { ButtonLink } from '@/components/Button/Button';
import { Input } from '@/components/Input';
import { Spacer, Wrapper } from '@/components/Layout';
import { Text } from '@/components/Text';
import { fetcher } from '@/lib/fetch';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import toast from 'react-hot-toast';

const ForgetPasswordIndex = () => {
  const emailRef = useRef();
  // 'loading' || 'success'
  const [status, setStatus] = useState();
  const [email, setEmail] = useState('');
  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      setStatus('loading');
      await fetcher('/api/user/password/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailRef.current.value,
        }),
      });
      setEmail(emailRef.current.value);
      setStatus('success');
    } catch (e) {
      toast.error(e.message);
      setStatus(undefined);
    }
  }, []);

  return (
    <Wrapper className="flex flex-col justify-center h-[calc(100vh_-_var(--nav-height))]">
      <div className="max-w-screen-sm w-full relative flex flex-col flex-1 self-center pt-12 p-6">
        {status === 'success' ? (
          <>
            <h1 className="text-[2rem] font-bold text-center mb-0">
              Check your inbox
            </h1>
            <p className="text-base text-[color:var(--secondary)] text-center leading-tight">
              An email has been sent{' '}
              <Text as="span" color="link">
                {email}
              </Text>
              . Please follow the link in that email to reset your password.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-[2rem] font-bold text-center mb-0">
              Forget Password
            </h1>
            <p className="text-base text-[color:var(--secondary)] text-center leading-tight">
              Enter the email address associated with your account, and
              we&apos;ll send you a link to reset your password.
            </p>
            <Spacer size={1} />
            <form onSubmit={onSubmit}>
              <Input
                ref={emailRef}
                htmlType="email"
                autoComplete="email"
                placeholder="Email Address"
                ariaLabel="Email Address"
                size="large"
                required
              />
              <Spacer size={0.5} axis="vertical" />
              <Button
                htmlType="submit"
                className="w-full"
                type="success"
                size="large"
                loading={status === 'loading'}
              >
                Continue
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
    </Wrapper>
  );
};

export default ForgetPasswordIndex;
