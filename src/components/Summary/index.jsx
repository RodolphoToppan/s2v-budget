import { FiPlus } from 'react-icons/fi'
import { Input } from '../Input'
import { Container, Divider, Modules, Total } from './styles'

export function Summary() {
  return (
    <Container>
      <Total>
        <p>
          Consumo mensal médio: <br /> <span>330 kWh</span>
        </p>
        <p>
          Consumo anual médio: <br /> <span>1450 kWh</span>
        </p>
      </Total>

      <Divider />

      <Modules>
        <p>15 módulos</p>
        <Input type="number" id="pot_module" />
        <label htmlFor="pot_module">W</label>
        <button>
          <FiPlus />
        </button>
      </Modules>
    </Container>
  )
}
