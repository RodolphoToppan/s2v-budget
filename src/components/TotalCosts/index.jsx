import { Container, Divider, System1, System2 } from "./styles";

export function TotalCosts() {
  return (
    <Container>
      <h3>Custo total</h3>
      <System1>
        <h4>Sistema 1</h4>

        <p>R$ 2.0000,00</p>
      </System1>

      <Divider />

      <System2>
        <h4>Sistema 2</h4>

        <p>R$ 2.0000,00</p>
      </System2>
    </Container>
  );
}
