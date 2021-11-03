import styled from "styled-components";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

//? Main App Component
function App() {
  return (
    <StyledApp>
      <Navbar />
      <Home />
      {/*
      <Prizes />
      <Sponsors />
      <Social /> */}
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
  background: linear-gradient(
    to right,
    #385a7c 0%,
    #385a7c 70%,
    #f97171 70%,
    #f97171 100%
  );

  /* background-color: #385a7c; */
  height: 100vh;
  font-family: "Poppins";
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
`;

export default App;
