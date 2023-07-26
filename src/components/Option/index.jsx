import { Container } from './styles'

export function Option({ value: content }) {
  return <Container value={content}>{content}</Container>
}
