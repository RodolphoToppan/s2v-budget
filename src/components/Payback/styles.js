import { styled } from "styled-components";

export const Container = styled.section`
  width: 100vw;

  display: grid;
  align-items: center;

  column-gap: 0.5rem;

  padding: 1.5rem;

  h2 {
    text-align: center;
    font-size: 2.5rem;
  }

  p {
    font-size: 1.7rem;
    text-align: center;
  }
`;

export const Content = styled.div`
  border: 1.5px solid ${({ theme }) => theme.COLORS.GREY_300};
  border-radius: 2rem;

  padding: 1.5rem;

  display: grid;
  justify-items: center;
  row-gap: 2rem;
`;

export const Return = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

export const Savings = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: -1rem;
  gap: 3rem;
`;
