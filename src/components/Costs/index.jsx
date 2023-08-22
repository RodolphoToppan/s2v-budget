import { FiPlus } from "react-icons/fi";
import { Input } from "../Input";
import { Button, Container, Content, Footer } from "./styles";

export function Costs() {
  return (
    <Container>
      <h2>Custos</h2>
      <Content>
        <Input id="m.o." value="Mão de obra" type="number" />
        <Input id="entry" value="Entrada" type="number" />
        <Input id="trafo" value="Transformador" type="number" />
        <Input id="taxes" value="Imposto" type="number" />
        <Input id="desloc" value="Deslocamento" type="number" />

        <Footer>
          <Button id="add">
            <FiPlus />
          </Button>
          <label htmlFor="add">Custos extras</label>
        </Footer>
      </Content>
    </Container>
  );
}
