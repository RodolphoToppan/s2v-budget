import { Input } from '../Input'
import { InputRadio } from '../InputRadio'
import { Option } from '../Option'
import {
  Container,
  Content,
  Inverter,
  Modules,
  Price,
  Select,
  Voltage
} from './styles'

export function Pricing() {
  return (
    <Container>
      <h2>Precificação</h2>
      <Content>
        <h3>Kit 01</h3>

        <Modules>
          <h4>Módulos</h4>

          <Input id="moduleAmount" type="number" value="Quantidade" />
          <label htmlFor="modulesBrands">Marcas</label>
          <Select id="modulesBrands" name="">
            <Option value="Canadian" />
            <Option value="JA" />
            <Option value="Sunova" />
          </Select>
          <Input id="modulePower" type="number" value="Potência" />
        </Modules>

        <Inverter>
          <h4>Inversor</h4>

          <Input id="inverterAmount" type="number" value="Quantidade" />
          <label htmlFor="inverterBrands">Marcas</label>
          <Select id="inverterBrands">
            <Option value="Growatt" />
            <Option value="Deye" />
            <Option value="Micro Deye" />
          </Select>
          <Voltage>
            <label htmlFor="voltage">Tensão</label>
            <InputRadio value="220V" name="voltage" id="v220" />
            <InputRadio value="380V" name="voltage" id="v380" />
            <InputRadio value="800V" name="voltage" id="v800" />
          </Voltage>
          <div className="flexDisplay">
            <Input id="inverterPower" type="number" value="Potência" />
            <label htmlFor="power">kW</label>
          </div>
        </Inverter>

        <Price>
          <Input
            id="kitPrice"
            type="number"
            content="Preço do kit "
            value="Preço do kit"
          />
        </Price>
      </Content>
    </Container>
  )
}
