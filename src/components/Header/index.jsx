import logo from '../../assets/logo-hor.png'
import { Container, List } from './styles'

export function Header() {
  return (
    <Container>
      <img src={logo} alt="S2V Engenharia" />
      <List>
        <li>Dimensionamento</li>
        <li>Precificação</li>
        <li>Proposta</li>
      </List>
    </Container>
  )
}
