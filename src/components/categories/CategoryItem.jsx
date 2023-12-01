/* eslint-disable react/prop-types */
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  opacity: 0.8;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({
    height: "30vh",
  })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%); */
  /* text-align: center; */
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
`;
const Title = styled.h1`
  color: white;
  white-space: nowrap;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 10px;
  border: none;
  color: grey;
  text-transform: uppercase;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img}></Image>
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
