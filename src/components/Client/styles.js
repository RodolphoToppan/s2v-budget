import { styled } from 'styled-components'

export const Container = styled.section`
  display: grid;
  justify-content: center;

  width: 100%;

  padding: 2.5rem;

  gap: 2rem;

  font-size: 2rem;

  input {
    height: 100%;
    width: 100%;

    padding: 0.8rem;

    color: ${({ theme }) => theme.COLORS.FONT_COLOR};
    font-weight: 400;

    border-radius: 2rem;
  }

  :nth-child(odd) div.cut {
    width: 5.8rem;
  }

  :last-child div.cut {
    width: 4.8rem;
  }
`
