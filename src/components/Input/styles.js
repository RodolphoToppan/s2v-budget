import { styled } from 'styled-components'

export const Container = styled.section`
  display: flex;

  input {
    padding: 0.8rem;

    color: ${({ theme }) => theme.COLORS.FONT_COLOR};
    font-weight: 400;

    border: none;
    border-radius: 0.6rem;
  }
`
