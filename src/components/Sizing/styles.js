import { styled } from 'styled-components'

export const Container = styled.section`
  display: grid;
  justify-items: center;

  padding: 1.5rem;
  margin-top: 1rem;

  font-size: 1.7rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 1rem;
  width: 100%;

  border: 1.5px solid ${({ theme }) => theme.COLORS.GREY_300};
  border-radius: 2rem;

  h3 {
    margin: 2rem 0 0;
  }
`

export const Form = styled.form`
  display: grid;
  justify-content: space-evenly;
  justify-items: center;

  gap: 2rem;
  grid-template-areas: 'title title';

  width: 100%;
  padding: 1rem;
`

export const Selection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  input[type='number'] {
    width: 8rem;

    padding-top: 0.4rem;
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;

  background: none;

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

  svg:hover {
    /* stroke */
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.5rem;
  margin: 2rem 0;
`
