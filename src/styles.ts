import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 3.2rem;

  main {
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    overflow: hidden;
    width: 100%;
    max-width: 46rem;
    min-height: 100%;
    padding: 2.4rem;
    border-radius: 4.6rem;
    border: ${({ theme }) => `0.2rem solid ${theme.colors.dark}`};
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 6.2rem;
  margin-bottom: 3.2rem;
  padding-top: 1.2rem;
  text-align: center;
  h1 {
    font-weight: 900;
    font-size: 3.6rem;
  }
  span {
    position: absolute;
    top: -0.2rem;
    left: 49%;
    transform: translateX(-50%) rotate(-7deg);
    color: ${({ theme }) => theme.colors.grayDark};
    font-family: "Architects Daughter", cursive;
    font-size: 2.7rem;
  }
`;
