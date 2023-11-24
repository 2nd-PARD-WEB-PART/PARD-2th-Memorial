import {auth} from '../fbase';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {useContext, useEffect, useState} from 'react';
import {UserContext} from '../contexts/userContext';
import styled from 'styled-components';
import { Button, Div, P, Empty } from '../components/box';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [logInData, setLogInData] = useContext(UserContext);
  const navigate = useNavigate();

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        setLogInData({
            uid: data.user.uid,
            name : data.user.displayName,
            emailVerified : data._tokenResponse.emailVerified,
        }); // user data 설정
        console.log(data) // console로 들어온 데이터 표시
        
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if(logInData.emailVerified){
        localStorage.setItem("uid", logInData.uid);
        localStorage.setItem("name", logInData.name);
        localStorage.setItem("emailVerified", logInData.emailVerified);
        navigate("/HomePage");
    }
  },[logInData])

  return (

    <Div
    backgroundColor="none"
    border="none"
    height="calc(100vh - 40px)"
    flexDirection="column">
    <Div backgroundColor="none" border="none" height="50%" flexDirection="column">
        <P height="20px">버르 장례식</P>
        <P fontSize="20px" height="30px">당신의 버릇이 잘 돌아가실 수 있도록 장례를 돕겠습니다.</P>
        <Empty></Empty>
        {/* <Link to="./AddPage"> */}
        <Button onClick={handleGoogleLogin}>Google 로그인</Button>
        {/* </Link> */}
    </Div>
</Div>
  );
}

export default Login;