import { Container } from './styles'

export function Client() {
  return (
    <Container>
      <div class="info_block">
        <label class="client_info" for="client_name">
          Cliente:
        </label>
        <input class="input" type="text" id="client_name" />
      </div>
    </Container>
  )
}
