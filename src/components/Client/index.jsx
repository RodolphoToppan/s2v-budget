import { InputClient } from '../InputClient'
import { Container } from './styles'

export function Client() {
  return (
    <Container>
      <InputClient
        id="clientName"
        type="text"
        value="Cliente"
        placeholder=" "
      />
      <InputClient
        id="clientAddress"
        type="text"
        value="Endereço"
        placeholder=" "
      />
      <InputClient id="clientCity" type="text" value="Cidade" placeholder=" " />
      <InputClient id="uc" type="text" value="UC(s)" placeholder=" " />
    </Container>
  )
}
