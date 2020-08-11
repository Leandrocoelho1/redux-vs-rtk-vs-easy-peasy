import styled, { css } from "styled-components";
import { transparentize } from "polished";

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 3.2rem;
  left: 3.2rem;
  z-index: 2;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 1.6rem;
  border: ${({ theme }) => `0.2rem solid ${theme.colors.dark}`};
  background: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transitions.smooth};

  ${(p) =>
    p.isOpen &&
    css`
      width: 23.6rem;
      height: 11.6rem;
      padding: 1.2rem 0 0.8rem 4.8rem;
    `}

  > div {
    display: flex;
    flex-direction: column;

    span {
      display: block;
      margin-bottom: -0.5rem;
      color: ${({ theme }) => theme.colors.grayDark};
      font-weight: 700;
      font-size: 1.3rem;
    }

    a {
      margin-bottom: 0.8rem;
      font-weight: 700;
      font-size: 1.6rem;
      text-decoration: none;
      transition: ${({ theme }) => theme.transitions.smooth};

      &:active,
      &:visited {
        color: ${({ theme }) => theme.colors.dark};
      }

      &:hover {
        color: ${({ theme }) => transparentize(0.3, theme.colors.dark)};
      }
    }
  }

  svg {
    position: absolute;
    top: 2.2rem;
    left: 2.2rem;
    transform: translate(-50%, -50%);
  }
`;
