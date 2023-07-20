import { styled } from 'styled-components'

export const Container = styled.section`
  display: grid;
  justify-content: center;

  padding: 1.5rem;
  margin-top: 1rem;

  font-size: 1.7rem;
`

export const Content = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: 2rem;
  grid-template-areas: 'title title';

  width: 100%;
  padding: 1rem;

  border: 1.5px solid ${({ theme }) => theme.COLORS.GREY_300};
  border-radius: 2rem;

  h3 {
    grid-area: title;
  }
`

export const Selection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  input {
    border-radius: 2rem;
  }

  input:focus {
    background-color: ${({ theme }) => theme.COLORS.PINK_300};
  }
`
