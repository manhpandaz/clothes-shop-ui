import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcerment = () => {
  return <Container>Super Deal! sale 50%</Container>;
};

export default Announcerment;
