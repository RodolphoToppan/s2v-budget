import { Form } from './styles'

export function BrandsList({ name: name, id: id }) {
  return (
    <Form>
      <label htmlFor="cars">Choose a car:</label>
      <select name={name} id={id}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </Form>
  )
}
