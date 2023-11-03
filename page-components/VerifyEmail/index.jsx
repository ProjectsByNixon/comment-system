import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import { Text } from '@/components/Text';
import Link from 'next/link';

export const VerifyEmail = ({ valid }) => {
  return (
    <Wrapper className="flex flex-col justify-center h-[calc(100vh_-_var(--nav-height))]">
      <Container column alignItems="center">
        <Text
          className="text-center text-2xl font-[bold]"
          color={valid ? 'success-light' : 'secondary'}
        >
          {valid
            ? 'Thank you for verifying your email address. You may close this page.'
            : 'It looks like you may have clicked on an invalid link. Please close this window and try again.'}
        </Text>
        <Spacer size={4} axis="vertical" />
        <Link href="/" passHref>
          <ButtonLink variant="ghost" type="success" size="large">
            Go back home
          </ButtonLink>
        </Link>
      </Container>
    </Wrapper>
  );
};
