import { Input } from '../Input'
import { Container } from './styles'

export function ModuleBrands() {
  return (
    <Container>
      <label htmlFor="moduleBrands">Marcas</label>
      <Input list="moduleBrands" name="brands" id="brands" type="text" />
      <datalist id="moduleBrands">
        <option value="Sunova" />
        <option value="Canadian" />
        <option value="JA Solar" />
        <option value="Trina" />
        <option value="Jinko" />
      </datalist>
    </Container>
  )
}
