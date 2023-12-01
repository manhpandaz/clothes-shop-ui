import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Announcerment from "../../components/announcement/Announcerment";
import Products from "../../components/products/Products";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import { mobile } from "../../responsive";

const Container = styled.div``;

const Title = styled.h1`
  padding: 0px 20px;
`;

const FilterContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
    gap: "20px",
  })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${mobile({
    display: "flex",
    justifyContent: "space-between",
  })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;

  ${mobile({
    fontSize: "15px",
  })}
`;

const Select = styled.select`
  padding: 10px;
  ${mobile({
    display: "flex",
    justifyContent: "space-around",
  })}
`;

const Options = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcerment />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter products:</FilterText>
          <Select>
            <Options disabled selected>
              Color
            </Options>
            <Options>White</Options>
            <Options>Black</Options>
            <Options>Red</Options>
            <Options>Blue</Options>
            <Options>Yellow</Options>
            <Options>Green</Options>
          </Select>

          <Select>
            <Options disabled selected>
              Size
            </Options>
            <Options>XS</Options>
            <Options>S</Options>
            <Options>M</Options>
            <Options>L</Options>
            <Options>XL</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Options selected disabled>
              Newest
            </Options>
            <Options>Price (asc)</Options>
            <Options>Price (desc)</Options>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
