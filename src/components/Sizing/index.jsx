import { Input } from '../Input'
import { Container, Content, Selection } from './styles'

export function Sizing() {
  return (
    <Container>
      <h2>Dimensionamento</h2>
      <Content>
        <h3>UC1</h3>
        <Selection>
          <h4>Tipo</h4>
          <Input value="GERADORA" type="button" />
          <Input value="BENEFICIÁRIA" type="button" />
        </Selection>
        <Selection>
          <h4>Ligação</h4>
          <Input value="BIFÁSICA" type="button" />
          <Input value="TRIFÁSICA" type="button" />
        </Selection>
      </Content>
    </Container>
  )
}
