import styled from 'styled-components'

export const Container = styled.header`
  display: grid;
  justify-content: center;

  padding: 1.5rem;
  gap: 3rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_BOTTOM};

  img {
    max-width: 100%;
  }
`

export const List = styled.ul`
  display: flex;
  justify-content: center;

  gap: 1rem;

  font-size: 1.6rem;
  font-weight: 600;

  color: ${({ theme }) => theme.COLORS.WHITE};

  li:nth-child(1),
  li:nth-child(2) {
    padding-right: 1rem;
    border-right: 2px solid ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
