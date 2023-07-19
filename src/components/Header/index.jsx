import logo from '../../assets/logo.png'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <nav>
        <img className="logo" src={logo} alt="S2V Engenharia" href="#" />
        <div className="menu">
          <ul>
            <li>
              <a className="title" href="#sizing">
                Dimensionamento
              </a>
            </li>
            <li>
              <a className="title" href="#pricing">
                Precificação
              </a>
            </li>
            <li>
              <a className="title" href="#proposal">
                Proposta
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  )
}
