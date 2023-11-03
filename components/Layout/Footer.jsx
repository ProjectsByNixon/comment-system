import { Text, TextLink } from '@/components/Text';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <footer className="text-sm border-t-[color:var(--accents-2)] text-center p-4 border-t border-solid">
      <Wrapper className="flex items-center justify-between">
        <Text color="accents-7">
          Made with ❤️ by{' '}
          <TextLink href="https://github.com/ReuelNixon" color="link">
            Reuel Nixon
          </TextLink>
          .
        </Text>
        <ThemeSwitcher />
      </Wrapper>
    </footer>
  );
};

export default Footer;
