import { styled } from 'styled-components'

export const Container = styled.section`
  display: grid;
  justify-content: center;

  width: 100%;

  padding: 1.5rem;

  gap: 1.5rem;

  font-size: 2rem;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.8rem;

  input {
    height: 2.4rem;
    min-width: 18rem;

    padding: 0.8rem;

    color: ${({ theme }) => theme.COLORS.FONT_COLOR};
    font-weight: 400;

    border-radius: 0.6rem;
  }
`
