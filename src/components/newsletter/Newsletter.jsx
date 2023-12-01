import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../../responsive";
//
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* padding: 50px; */
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({
    fontSize: "30px",
  })}
`;
const Desc = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({
    fontSize: "18px",
    textAlign: "center",
  })}
`;

const IinputContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    width: "80%",
  })}
`;

const Input = styled.input`
  height: 40px;
  padding-left: 15px;
  outline: none;
  border: none;
  flex: 9;
`;

const Button = styled.button`
  height: 40px;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at
        perferendis eius excepturi incidunt doloribus quisquam voluptatem
        itaque? Nisi, alias porro atque ipsam aspernatur nemo. Aliquid similique
        deserunt nobis vero.
      </Desc>
      <IinputContainer>
        <Input placeholder="Your email"></Input>
        <Button>
          <SendIcon />
        </Button>
      </IinputContainer>
    </Container>
  );
};

export default Newsletter;
