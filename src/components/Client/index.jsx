import { Input } from '../Input'
import { Container, Content } from './styles'

export function Client() {
  return (
    <Container>
      <Content>
        <label htmlFor="clientName">Cliente:</label>
        <Input type="text" id="clientName" />
      </Content>
      <Content>
        <label htmlFor="clientAddress">Endereço:</label>
        <Input id="clientAddress" type="text" />
      </Content>
      <Content>
        <label htmlFor="clientCity">Cidade: </label>
        <Input id="clientCity" type="text" />
      </Content>
      <Content>
        <label htmlFor="uc">UC(s): </label>
        <Input id="uc" type="text" />
      </Content>
    </Container>
  )
}
