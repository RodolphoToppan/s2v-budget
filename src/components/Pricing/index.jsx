import { Input } from '../Input'
import { InputRadio } from '../InputRadio'
import { InverterBrands } from '../InverterBrands'
import { ModuleBrands } from '../ModuleBrands'
import { Container, Content, Inverter, Modules, Price, Voltage } from './styles'

export function Pricing() {
  return (
    <Container>
      <h3>Precificação</h3>
      <Content>
        <h4>Kit 01</h4>

        <Modules>
          <h5>Módulos</h5>

          <Input id="modulesAmount" type="number" value="Quantidade" />
          <ModuleBrands />

          <Input id="modulePower" type="number" value="Potência" />
        </Modules>

        <Inverter>
          <h5>Inversor</h5>

          <Input id="inverterAmount" type="number" value="Quantidade" />
          <InverterBrands />
          <Voltage>
            <label htmlFor="voltage">Tensão</label>
            <InputRadio value="220V" name="voltage" id="v220" />
            <InputRadio value="380V" name="voltage" id="v380" />
            <InputRadio value="800V" name="voltage" id="v800" />
          </Voltage>
          <div id="adjust">
            <Input id="inverterPower" type="number" value="Potência" />
            <label htmlFor="inverterPower">kW</label>
          </div>
        </Inverter>

        <Price>
          <Input id="kitPrice" type="number" value="Preço do kit " />
        </Price>
      </Content>
    </Container>
  )
}
