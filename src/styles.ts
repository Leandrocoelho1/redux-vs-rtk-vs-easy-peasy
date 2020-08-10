import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 3.2rem;

  main {
    padding: 2.4rem;
    border-radius: 4.6rem;
    background: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `0.2rem solid ${theme.colors.dark}`};
    min-height: 100%;
    width: 100%;
    max-width: 46rem;
    display: grid;
    grid-template-rows: auto auto 1fr auto;
  }
`;

export const Header = styled.header`
  position: relative;
  width: 100%;
  text-align: center;
  padding-top: 1.2rem;
  height: 6.2rem;
  margin-bottom: 3.2rem;
  h1 {
    font-weight: 900;
    font-size: 3.6rem;
  }
  span {
    font-family: "Architects Daughter", cursive;
    font-size: 2.7rem;
    color: ${({ theme }) => theme.colors.grayDark};
    position: absolute;
    top: -0.2rem;
    left: 49%;
    transform: translateX(-50%) rotate(-7deg);
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-bottom: 3.2rem;
  h2 {
    font-weight: 700;
    font-size: 1.8rem;
    margin-left: 2.2rem;
    margin-bottom: 0.4rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5.2rem;
    border-radius: 1.8rem;
    padding-left: 2.2rem;
    padding-right: 0.7rem;
    background: ${({ theme }) => theme.colors.grayMedium};
    border: ${({ theme }) => `0.2rem solid ${theme.colors.dark}`};
    transition: ${({ theme }) => theme.transitions.smooth};
    &:focus-within {
      background: ${({ theme }) => darken(0.15, theme.colors.grayMedium)};
    }

    input {
      flex: 1;
      margin-right: 0.7rem;
      border: none;
      background: transparent;
    }

    button {
      height: 38px;
      width: 38px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      outline: none;
      background: ${({ theme }) => theme.colors.white};
      transition: ${({ theme }) => theme.transitions.smooth};

      &:hover,
      &:focus {
        background: ${({ theme }) => transparentize(0.3, theme.colors.white)};
      }
    }
  }
`;

export const TodoList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 1.8rem;
    margin-left: 2.2rem;
    margin-bottom: 0.4rem;
  }
  div {
    width: 100%;
    flex: 1;
    min-height: 200px;
    border-radius: 2.2rem;
    background: ${({ theme }) => theme.colors.grayMedium};
    border: ${({ theme }) => `0.2rem solid ${theme.colors.dark}`};
  }
`;

export const Counter = styled.div`
  width: 100%;
  margin-top: 3.2rem;
  h2 {
    font-weight: 700;
    font-size: 1.8rem;
    margin-left: 2.2rem;
  }
`;
