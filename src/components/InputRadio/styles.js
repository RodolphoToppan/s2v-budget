import { styled } from 'styled-components'

export const Container = styled.div`
  display: grid;

  label {
    font-size: 1.7rem;
    font-weight: 600;

    padding: 0.65rem 0.8rem 0.5rem;
    border-radius: 2rem;

    color: ${({ theme }) => theme.COLORS.FONT_COLOR};
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    transition: 0.3s;

    cursor: pointer;
  }

  input[type='radio']:checked + label {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BLUE_300};
  }
`
