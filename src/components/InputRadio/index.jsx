import { Container } from './styles'

export function InputRadio({ id: id, name: name }) {
  return (
    <Container>
      <input type="radio" name={name} id={id} hidden />
      <label htmlFor={id}>{id}</label>
    </Container>
  )
}
