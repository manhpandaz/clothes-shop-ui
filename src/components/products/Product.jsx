// /* eslint-disable react/prop-types */
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: absolute;
  z-index: 4;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 350px;
  min-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #f5fbfd;
  cursor: pointer;
  z-index: 1;
  transition: opacity 1.5s ease-in;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  z-index: 2;
`;

const Image = styled.img`
  height: 75%;
  object-fit: cover;
  z-index: 3;
`;

const Icon = styled.div`
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
