import Head from "next/head";
import styled from "styled-components";

const StyledContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledHeading = styled.h1`
  ${({ theme }) => theme.typography.xl}
  color: ${({ theme }) => theme.colors.text.primary};
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledContainer>
        <StyledHeading>KP Web Solutions</StyledHeading>
      </StyledContainer>
    </>
  );
}
