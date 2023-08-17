import { Container, Divider, System1, System2 } from "./styles";

export function Generation() {
  return (
    <Container>
      <System1>
        <h4>Sistema 1</h4>

        <p>
          Geração mensal média: <br /> <span>330 kWh</span>
        </p>
        <p>
          Compensação: <br /> <span>100%</span>
        </p>
      </System1>

      <Divider />

      <System2>
        <h4>Sistema 2</h4>

        <p>
          Geração mensal média: <br /> <span>400 kWh</span>
        </p>
        <p>
          Compensação: <br /> <span>120%</span>
        </p>
      </System2>
    </Container>
  );
}
