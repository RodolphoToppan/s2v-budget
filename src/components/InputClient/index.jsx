import { Container } from './styles'

export function InputClient({ id: id, value: content, icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon />}
      <input id={id} {...rest} placeholder=" " />
      <div className="cut"></div>
      <label htmlFor={id}>{content}</label>
    </Container>
  )
}
