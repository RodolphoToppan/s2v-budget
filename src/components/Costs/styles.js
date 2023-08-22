import { styled } from "styled-components";

export const Container = styled.section`
  display: grid;
  justify-items: center;

  padding: 1.5rem;
  margin-top: 1rem;

  font-size: 1.7rem;
`;

export const Content = styled.div`
  display: grid;
  justify-items: center;

  padding: 1rem;

  row-gap: 1rem;

  width: 100%;
  height: 100%;

  border-radius: 2rem;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.FONT_COLOR};

  label {
    font-size: 1.6rem;
    font-weight: 700;
  }

  input {
    width: 10rem;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.5rem;
  height: 3.5rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border: 3px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 50%;

  &:hover {
    background: ${({ theme }) => theme.COLORS.BLUE_300};
  }

  svg {
    width: 3rem;
    height: 3rem;
    stroke: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.5rem;
  margin: 1rem 0;
`;
