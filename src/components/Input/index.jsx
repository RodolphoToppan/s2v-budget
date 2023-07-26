import { Container } from './styles'

export function Input({ id: id, value: content, icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon />}
      <label htmlFor={id}>{content}</label>
      <input id={id} {...rest} />
    </Container>
  )
}
