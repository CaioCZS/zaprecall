import styled from "styled-components";
import Card from "./Card";
export default function Cards({cards,adicionarFinalizadas}) {
  return (
    <ContainerCards>
      {cards.map(c => <Card adicionarFinalizadas={adicionarFinalizadas} key={c.id} id={c.id} pergunta={c.question} resposta={c.answer} />)}
    </ContainerCards>
  );
}

const ContainerCards = styled.div`
  background-color: rgb(128, 128, 128);
  width: 100%;
  text-align: center;
`;


