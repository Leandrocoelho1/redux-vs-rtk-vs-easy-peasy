import styled from "styled-components";
import { motion } from "framer-motion";
import { darken } from "polished";

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

export const TodoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5.2rem;
  padding: 0.6rem;
  border-radius: 1.8rem;
  border: ${({ theme }) => `0.2rem solid ${theme.colors.dark}`};
  background: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transitions.smooth};
  p {
    margin-left: 0.6rem;
    font-weight: 500;
    font-size: 1.6rem;
    margin-right: auto;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      display: grid;
      place-items: center;
      width: 3.6rem;
      height: 3.6rem;
      border-radius: 1.2rem 0 0 1.2rem;
      border: none;
      outline: none;
      background: ${({ theme }) => theme.colors.grayMedium};
      color: ${({ theme }) => theme.colors.dark};
      transition: ${({ theme }) => theme.transitions.smooth};

      &:hover {
        background: ${({ theme }) => darken(0.1, theme.colors.grayMedium)};
      }
    }
    button + button {
      border-radius: 0 1.2rem 1.2rem 0;
    }
  }

  & + & {
    margin-top: 0.8rem;
  }
`;
