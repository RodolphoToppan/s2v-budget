import { styled } from "styled-components";

export const Container = styled.section`
  display: grid;
  justify-content: space-evenly;
  align-items: center;

  grid-template-areas:
    "title title title"
    "system1 divider system2";

  column-gap: 0.5rem;
  row-gap: 1rem;

  padding: 1.5rem;

  h3 {
    grid-area: title;
    text-align: center;
  }
`;

export const System1 = styled.div`
  display: grid;
  justify-items: center;

  grid-area: system1;

  gap: 1rem;

  p {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const Divider = styled.div`
  grid-area: divider;
  width: 1px;
  height: 6.5rem;
  border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const System2 = styled.div`
  display: grid;
  justify-items: center;

  grid-area: system2;

  gap: 1rem;

  p {
    font-size: 1.5rem;
    text-align: center;
  }
`;
