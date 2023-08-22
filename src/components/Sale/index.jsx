import { Input } from "../Input";
import { Container, Content, System1, System2 } from "./styles";

export function Sale() {
  return (
    <Container>
      <h2>Valor de venda</h2>

      <Content>
        <Input id="margem" value="Margem" type="range" />

        <System1>
          <h3>Sistema 1</h3>
          <p>
            Preço WP <span>R$100,00</span>
          </p>
          <h4>
            Lucro <span>R$2.000,00</span>
          </h4>
          <p>
            Comissão <span>R$400,00</span>
          </p>
          <h3>
            TOTAL <br /> <strong>R$10.000,00</strong>
          </h3>
          <p>
            Financiamento <span>R$2.000,00</span>
          </p>
        </System1>

        <System2>
          <h3>Sistema 2</h3>
          <p>
            Preço WP <span>R$100,00</span>
          </p>
          <h4>
            Lucro <span>R$2.000,00</span>
          </h4>
          <p>
            Comissão <span>R$400,00</span>
          </p>
          <h3>
            TOTAL <br /> <strong>R$10.000,00</strong>
          </h3>
          <p>
            Financiamento <span>R$2.000,00</span>
          </p>
        </System2>
      </Content>
    </Container>
  );
}
