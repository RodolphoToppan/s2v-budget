import { Container, Content, Return, Savings } from "./styles.js";

export function Payback() {
  return (
    <Container>
      <h2>Retorno financeiro</h2>
      <Content>
        <Return>
          <p>
            Sem S2V: <br />
            <strong>R$ 100,00</strong>
          </p>
          <p>
            Com S2V: <br />
            <strong>R$ 100,00</strong>
          </p>
        </Return>

        <h2>Economia</h2>
        <Savings>
          <p>
            Mensal: <br />
            <strong>R$ 80,00</strong>
          </p>
          <p>
            25 anos: <br />
            <strong>R$ 8.000,00</strong>
          </p>
        </Savings>
      </Content>
    </Container>
  );
}
