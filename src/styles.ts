import styled from "styled-components";
import { darken, transparentize } from "polished";

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

export const Form = styled.form`
  width: 100%;
  margin-bottom: 3.2rem;
  h2 {
    margin-bottom: 0.4rem;
    margin-left: 2.2rem;
    font-weight: 700;
    font-size: 1.8rem;
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5.2rem;
    padding-right: 0.5rem;
    padding-left: 2.2rem;
    border-radius: 1.8rem;
    border: ${({ theme }) => `0.2rem solid ${theme.colors.dark}`};
    background: ${({ theme }) => theme.colors.grayMedium};
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
      display: flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      border-radius: 12px;
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
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    margin-bottom: 0.4rem;
    margin-left: 2.2rem;
    font-weight: 700;
    font-size: 1.8rem;
  }
  & > div {
    width: 100%;
    min-height: 200px;
    flex: 1;
    padding: 1.2rem;
    border-radius: 2.2rem;
    border: ${({ theme }) => `0.2rem solid ${theme.colors.dark}`};
    background: ${({ theme }) => theme.colors.grayMedium};
  }
`;

export const Todo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5.2rem;
  padding: 0.6rem;
  border-radius: 1.8rem;
  border: ${({ theme }) => `0.2rem solid ${theme.colors.dark}`};
  background: ${({ theme }) => theme.colors.white};

  p {
    margin-left: 1.6rem;
    font-weight: 500;
    font-size: 1.6rem;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.6rem;
    width: 8rem;
    border-radius: 1.2rem;
    background: ${({ theme }) => theme.colors.grayMedium};

    button {
      display: grid;
      place-items: center;
      flex: 1;
      height: 100%;
      border: none;
      outline: none;
      background: transparent;
      color: ${({ theme }) => theme.colors.dark};
      transition: ${({ theme }) => theme.transitions.smooth};

      &:hover {
        color: ${({ theme }) => transparentize(0.3, theme.colors.dark)};
      }
    }
  }

  & + & {
    margin-top: 0.8rem;
  }
`;

export const Counter = styled.div`
  width: 100%;
  margin-top: 3.2rem;
  h2 {
    margin-left: 2.2rem;
    font-weight: 700;
    font-size: 1.8rem;
  }
`;
