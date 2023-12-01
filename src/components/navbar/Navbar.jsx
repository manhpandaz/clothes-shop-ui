import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { mobile } from "../../responsive.js";

const Container = styled.div`
  height: 60px;
  /* width: 100%; */
  margin-bottom: 40px;
  ${mobile({
    height: "50px",
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    padding: "10px 0px",
    gap: "0px",
  })}
`;

const Left = styled.div`
  /* width: calc(100% / 3); */
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 25px;
`;

const InputSearch = styled.input`
  width: 100%;
  border: none;
  outline: none;
  ${mobile({
    display: "none",
  })}
`;

const Center = styled.div`
  /* width: calc(100% / 3); */
  flex: 1;
  text-align: center;
  ${mobile({
    left: "0",
  })}
`;

const Logo = styled.h1`
  font-weight: bold;
  white-space: nowrap;
  ${mobile({
    fontSize: "18px",
  })}
`;

const Right = styled.div`
  /* width: calc(100% / 3); */
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
  ${mobile({
    justifyContent: "center",
    flex: 2,
    gap: "0px",
  })}
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    fontSize: "12px",
    marginLeft: "10px",
  })}
`;

const Navbar = () => {
  return (
    <Container className="container">
      <Wrapper>
        <Left>
          <Language>
            EN
            <ArrowDropDownIcon />
          </Language>
          <SearchContainer>
            <InputSearch placeholder="Search" />
            <SearchIcon
              style={{ cursor: "pointer", color: "grey", fontSize: "20px" }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>E-commerce</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SING IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
