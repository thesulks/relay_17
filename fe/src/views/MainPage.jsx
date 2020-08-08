import React from "react";
import styled from "styled-components";

import ChatBot from "../components/ChatBot/ChatBot";

const MainPage = () => {
  return (
    <Wrapper>
      <MainHeader>I Loved School</MainHeader>
      <ChatBot />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
`;

const MainHeader = styled.div``;

export default MainPage;
