import { styled } from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 15px;
  background-color: purple;
`;

const StyledApp = styled.div`
  background-color: orange;
  padding: 10px;
`;

function App() {
  return (
    <StyledApp>
      <H1>hello</H1>
      <Button>Check in</Button>
      <Button>Check out</Button>
    </StyledApp>
  );
}

export default App;
