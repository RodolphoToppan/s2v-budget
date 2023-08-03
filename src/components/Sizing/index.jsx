import { FiPlus } from 'react-icons/fi'

import { Input } from '../Input'
import { InputRadio } from '../InputRadio'
import { Button, Container, Content, Footer, Form, Selection } from './styles'

export function Sizing() {
  return (
    <Container>
      <h2>Dimensionamento</h2>
      <Content>
        <h3>UC1</h3>
        <Form>
          <Selection>
            <h4>Tipo</h4>
            <InputRadio name="tipo" id="geradora" value="GERADORA" />
            <InputRadio name="tipo" id="beneficiaria" value="BENEFICIÁRIA" />
          </Selection>

          <Selection>
            <h4>Ligação</h4>
            <InputRadio name="ligacao" id="bifasica" value="BIFÁSICA" />
            <InputRadio name="ligacao" id="trifasica" value="TRIFÁSICA" />
          </Selection>

          <Input type="number" id="tarifa" value="Tarifa" />
          <Input type="number" id="ip" value="IP (R$)" />
        </Form>

        <Footer>
          <Button id="add">
            <FiPlus />
          </Button>
          <label htmlFor="add">Adicionar Consumo (kWh)</label>
        </Footer>
      </Content>
    </Container>
  )
}
