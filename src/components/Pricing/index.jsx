import { Input } from '../Input'
import { InputRadio } from '../InputRadio'
import { Container, Content, Inverter, Modules, Price, Voltage } from './styles'

export function Pricing() {
  return (
    <Container>
      <h3>Precificação</h3>
      <Content>
        <h4>Kit 01</h4>

        <Modules>
          <h5>Módulos</h5>

          <Input id="amount" type="number" value="Quantidade" />
          <Input id="brand" type="" value="Marca" />
          <Input id="power" type="number" value="Potência" />
        </Modules>

        <Inverter>
          <h5>Inversor</h5>

          <Input id="amount" type="number" value="Quantidade" />
          <Input id="brand" type="" value="Marca" />
          <Voltage>
            <label htmlFor="voltage">Tensão</label>
            <InputRadio value="220V" name="voltage" id="v220" />
            <InputRadio value="380V" name="voltage" id="v380" />
            <InputRadio value="800V" name="voltage" id="v800" />
          </Voltage>
          <Input id="power" type="number" value="Potência" />
          <label htmlFor="power">kW</label>
        </Inverter>

        <Price>
          <Input id="kitPrice" type="number" content="Preço do kit " />
        </Price>
      </Content>
    </Container>
  )
}
