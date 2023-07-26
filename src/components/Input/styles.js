import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  gap: 1rem;

  input {
    padding: 0.2rem 1rem;

    color: ${({ theme }) => theme.COLORS.FONT_COLOR};
    font-size: 1.7rem;
    font-weight: 400;

    border: none;
    border-radius: 1.3rem;
  }
`
