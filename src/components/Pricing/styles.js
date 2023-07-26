import { styled } from 'styled-components'

export const Container = styled.section`
  display: grid;
  justify-items: center;

  padding: 1.5rem;
  margin-top: 1rem;

  font-size: 1.7rem;
`

export const Content = styled.div`
  display: grid;
  justify-items: center;

  grid-template-areas:
    'title title'
    'modules inverter'
    'price price';

  padding: 1rem;

  row-gap: 1rem;

  width: 100%;
  height: 100%;

  border-radius: 2rem;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.FONT_COLOR};

  h3 {
    grid-area: title;
  }

  label {
    font-size: 1.5rem;
    font-weight: 400;
  }

  input {
    width: 7rem;
  }
`

export const Modules = styled.div`
  display: grid;
  justify-items: center;
  align-content: space-between;
  grid-area: modules;
`
export const Inverter = styled.div`
  display: grid;
  justify-items: center;
  align-content: space-between;
  grid-area: inverter;

  row-gap: 1rem;

  .flexDisplay {
    display: flex;
    align-items: flex-end;

    gap: 0.5rem;

    label:last-child {
      margin-bottom: 0.3rem;
    }
  }
`

export const Select = styled.select`
  display: flex;
`

export const Voltage = styled.div`
  display: grid;
  justify-items: center;

  grid-template-areas:
    'volt volt volt'
    'v220 v380 v800';

  label:nth-child(1) {
    grid-area: volt;
  }

  label:nth-child(2) {
    grid-area: v220;
  }

  label:nth-child(3) {
    grid-area: v220;
  }

  label:nth-child(4) {
    grid-area: v220;
  }
`

export const Price = styled.div`
  display: grid;
  justify-items: center;

  grid-area: price;

  input {
    width: 13rem;
  }
`
