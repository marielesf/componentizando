import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10%;
`;

const Main = ({ title, descricao, children }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{descricao}</p>
      {children}
    </Container>
  );
};

export default Main;
