import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 3.2rem;
  h2 {
    margin-bottom: 0.4rem;
    margin-left: 2.2rem;
    font-weight: 700;
    font-size: 1.8rem;
  }
  & > form {
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
      height: 3.8rem;
      width: 3.8rem;
      border-radius: 1.2rem;
      border: none;
      outline: none;
      background: ${({ theme }) => theme.colors.white};
      transition: ${({ theme }) => theme.transitions.smooth};

      &:hover,
      &:focus {
        background: ${({ theme }) => transparentize(0.3, theme.colors.white)};
      }
    }

    div {
      display: flex;
      > button:first-child {
        border-radius: 1.2rem 0 0 1.2rem;
      }
      button + button {
        border-radius: 0 1.2rem 1.2rem 0;
      }
    }
  }
`;
