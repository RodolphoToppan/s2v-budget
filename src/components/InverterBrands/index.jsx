import { Input } from '../Input'
import { Container } from './styles'

export function InverterBrands() {
  return (
    <Container>
      <label htmlFor="inverterBrands">Marcas</label>
      <Input list="inverterBrands" name="brands" id="brands" type="text" />
      <datalist id="inverterBrands">
        <option value="Growatt" />
        <option value="Micro Deye" />
        <option value="Deye" />
        <option value="Sungrow" />
        <option value="Solis" />
      </datalist>
    </Container>
  )
}
