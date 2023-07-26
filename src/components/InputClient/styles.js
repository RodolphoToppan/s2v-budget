import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  gap: 1rem;

  position: relative;

  input {
    width: 100%;
    height: 100%;

    padding: 0.2rem 1rem;

    color: ${({ theme }) => theme.COLORS.FONT_COLOR};
    font-size: 2rem;
    font-weight: 400;

    border: 0;
    border-radius: 2rem;

    outline: 0;
  }

  div.cut {
    width: 7rem;
    height: 2rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border-radius: 1rem;

    top: -2rem;
    left: 2rem;
    position: absolute;

    transform: translateY(0);
    transition: transform 200ms;
  }

  input:focus ~ div.cut,
  input:not(:placeholder-shown) ~ div.cut {
    transform: translateY(0.6rem);
  }

  label {
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    pointer-events: none;

    position: absolute;
    left: 2rem;
    top: auto;

    transition: transform 200ms, color 200ms;
    transform-origin: 0 50%;
  }

  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    transform: translateY(-1.9rem) translateX(0.8rem) scale(0.75);
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
