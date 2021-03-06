import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { postLogin } from "../util/ReqMessage";

const LoginPage = () => {
  let history = useHistory();

  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [graduatedYear, setGraduatedYear] = useState(0);
  const [favors, setFavors] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const onSetName = ({ target }) => {
    setName(target.value);
  };

  const onSetSchool = ({ target }) => {
    setSchool(target.value);
  };

  const onSetGraduatedYear = ({ target }) => {
    setGraduatedYear(target.value);
    if (target.value < 1500 || target.value > 2100) setErrMsg("졸업년도를 정확히 입력해주세요");
    else setErrMsg("");
  };

  const onSetFavors = ({ target }) => {
    setFavors(target.value);
  };

  const onSubmit = async () => {
    if (!(name && school && graduatedYear && favors)) {
      setErrMsg("이름, 학교, 졸업년도, 관심사를 모두 입력해주세요.");
      return;
    }

    if (errMsg) return;
    const params = { name: name, school: school, favors: favors, graduatedYear: graduatedYear };
    await postLogin(params);
    history.push(`/MainPage/${name}`);
  };

  return (
    <Wrapper>
      <h1>I Loved School Logo</h1>
      <LoginBox>
        <LoginHeader>
          <h1>로그인</h1>
          <p>안녕하세요, I Loved School 입니다.</p>
        </LoginHeader>
        <Input type="text" name="name" placeholder="이름" onChange={onSetName}></Input>
        <Input type="text" name="school" placeholder="학교" onChange={onSetSchool}></Input>
        <Input type="text" name="graduatedYear" placeholder="졸업년도" onChange={onSetGraduatedYear}></Input>
        <Input type="text" name="favors" placeholder="관심사" onChange={onSetFavors}></Input>
        <ErrorMsg>{errMsg}</ErrorMsg>
        <Button onClick={onSubmit}>시작하기</Button>
      </LoginBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  padding-top: 50px;
`;

const LoginBox = styled.div`
  display: block;
  top: 30%;
  margin: auto;
  margin-top: 5%;
  width: 40%;
  border: 3px solid grey;
  padding: 10px;
`;

const LoginHeader = styled.div`
  display: block;
  text-align: center;
`;

const Input = styled.input`
  display: block;
  margin: 0 auto;
  margin-top: 10px;
`;

const ErrorMsg = styled.p`
  text-align: center;
  color: red;
  font-size: small;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 50px;
`;

export default LoginPage;
