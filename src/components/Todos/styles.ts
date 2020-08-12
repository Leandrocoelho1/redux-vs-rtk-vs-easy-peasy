import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div`
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

export const TodoContainer = styled.div`
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
