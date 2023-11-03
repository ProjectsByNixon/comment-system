import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';

const Hero = () => {
  return (
    <Wrapper>
      <div className="pb-16">
        <h1 className="md:text-9xl text-center font-extrabold leading-[1.1] mt-6 mb-16 mx-0 text-5xl sm:text-6xl">
          <span className="block -mb-2 pb-2.5 bg-clip-text relative z-[1]">
            Next.js
          </span>
          <span className="block -mb-2 pb-2.5 bg-clip-text relative z-[1]">
            MongoDB
          </span>
          <span className="block -mb-2 pb-2.5">App</span>
        </h1>
        <Container
          justifyContent="center"
          className="max-w-[26rem] mt-0 mb-16 mx-auto flex flex-col sm:flex-row items-center gap-4"
        >
          <Container>
            <Link passHref href="/feed">
              <ButtonLink className="h-[50px] min-w-[200px] px-[25px] py-0">
                Explore Feed
              </ButtonLink>
            </Link>
          </Container>
          <Spacer axis="horizontal" size={1} />
          <Container>
            <ButtonLink
              href="https://github.com/ProjectsByNixon/comment-system"
              type="secondary"
              className="h-[50px] min-w-[200px] px-[25px] py-0"
            >
              GitHub
            </ButtonLink>
          </Container>
        </Container>
        <p className="text-[color:var(--secondary)] font-normal text-xl text-center mt-2 mb-16 mx-0">
          A Next.js and MongoDB web application, designed for the internship
          application process.
        </p>
      </div>
    </Wrapper>
  );
};

export default Hero;
