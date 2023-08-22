import { styled } from "styled-components";

export const Container = styled.section`
  display: grid;
  justify-items: center;

  padding: 1.5rem;
`;

export const Content = styled.div`
  display: grid;

  grid-template-areas:
    "margem margem"
    "system1 system2";

  margin: 1rem 0;

  row-gap: 1rem;

  width: 100%;
  height: 100%;

  border-radius: 2rem;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.FONT_COLOR};

  input[type="range"] {
    display: flex;
    grid-area: margem;
  }

  label {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

export const System1 = styled.div`
  display: grid;
  justify-items: center;

  grid-area: system1;

  gap: 1rem;

  h3 {
    text-align: center;
  }

  p:last-child {
    text-align: center;
  }
`;

export const System2 = styled.div`
  display: grid;
  justify-items: center;

  grid-area: system2;

  gap: 1rem;

  h3 {
    text-align: center;
  }

  p:last-child {
    text-align: center;
  }
`;
