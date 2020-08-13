import styled from "styled-components";

export const Container = styled.label`
  cursor: pointer;
  position: relative;
  display: grid;
  place-items: center;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 1.2rem;
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.dark};
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    background: ${({ theme }) => theme.colors.grayMedium};
  }

  input {
    display: none;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    width: 3.6rem;
    height: 3.6rem;
    opacity: 0;
    transition: all 150ms ease-out;
  }

  input:checked ~ div {
    opacity: 1;
  }
`;
