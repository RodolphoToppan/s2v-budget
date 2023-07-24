import { styled } from 'styled-components'

export const Container = styled.section`
  display: grid;
  justify-content: space-evenly;
  align-items: center;
  grid-template-areas: 'total divider modules';

  padding: 1.5rem;
`
export const Total = styled.div`
  display: grid;
  grid-area: total;

  gap: 1rem;

  p {
    font-size: 1.5rem;
    text-align: center;
  }
`
export const Divider = styled.div`
  grid-area: divider;
  width: 1px;
  height: 6.5rem;
  border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`
export const Modules = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-areas:
    'number number number'
    'input label button';
  grid-area: modules;

  row-gap: 1.5rem;

  p {
    grid-area: number;

    font-size: 1.8rem;
  }

  input {
    width: 4.7rem;
  }

  label {
    margin: 0 0.6rem 0 0.2rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 50%;
    background: none;

    svg {
      width: 2rem;
      height: 2rem;
      stroke: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
