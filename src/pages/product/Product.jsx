import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Announcerment from "../../components/announcement/Announcerment";
import { mobile } from "../../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  gap: 40px;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 90vh;
  width: 100%;
  object-fit: cover;
  ${mobile({
    height: "30vh",
  })}
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${mobile({
    gap: "15px",
    textAlign: "center",
  })}
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: 200;
`;

const Desc = styled.p`
  font-weight: 200;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const Filter = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;

const FilterTitle = styled.span`
  font-size: 20px;
`;

const Colors = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

const Color = styled.span`
  background-color: ${(props) => props.color};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
`;

const FilterSize = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FilterSelect = styled.select`
  padding: 5px;
`;

const FilterOption = styled.option``;

const Buy = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    gap: "20px",
  })}
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Reduce = styled.span`
  cursor: pointer;
  font-size: 30px;
`;

const Input = styled.input`
  width: 40px;
  height: 25px;
  border-radius: 6px;
  border: 1px solid grey;
  text-align: center;
`;

const Increment = styled.span`
  cursor: pointer;
  font-size: 30px;
`;

const Button = styled.button`
  padding: 10px 10px;
  cursor: pointer;
  border: 2px solid teal;
  text-transform: uppercase;
  background-color: #fff;

  &:hover {
    opacity: 0.6;
  }

  ${mobile({
    width: "100%",
  })}
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcerment />
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1699619093007-c4fb05dcdd0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D" />
        </ImgContainer>

        <Content>
          <Title>Suit</Title>

          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut est
            impedit autem quasi nisi architecto, placeat aspernatur sed, in
            sapiente dicta. Eius quae maiores odio repellat ad natus aut
            voluptatibus.
          </Desc>
          <Price>$ 2000</Price>
          <Filter>
            <Colors>
              <FilterTitle>Color:</FilterTitle>
              <Color color="black"></Color>
              <Color color="darkblue"></Color>
              <Color color="gray"></Color>
            </Colors>
            <FilterSize>
              <FilterTitle>Size:</FilterTitle>
              <FilterSelect>
                <FilterOption>XS</FilterOption>
                <FilterOption>S</FilterOption>
                <FilterOption>M</FilterOption>
                <FilterOption>L</FilterOption>
                <FilterOption>XL</FilterOption>
              </FilterSelect>
            </FilterSize>
          </Filter>
          <Buy>
            <Quantity>
              <Reduce>-</Reduce>
              <Input value={0}></Input>
              <Increment>+</Increment>
            </Quantity>
            <Button>Add to card</Button>
          </Buy>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Product;
