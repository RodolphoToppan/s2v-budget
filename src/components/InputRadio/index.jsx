import { Container } from './styles'

export function InputRadio({ id: id, name: name, value: content, ...rest }) {
  return (
    <Container>
      <input type="radio" name={name} id={id} hidden {...rest} />
      <label htmlFor={id}>{content}</label>
    </Container>
  )
}
