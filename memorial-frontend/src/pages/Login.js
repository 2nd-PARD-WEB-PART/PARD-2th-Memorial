import {auth} from '../fbase';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {useContext, useState} from 'react';
import {UserContext} from '../contexts/userContext';
import styled from 'styled-components';

const Div = styled.div `
    display: ${props => props.display || "flex"};
    justify-content: ${props => props.justifyContent || "center"};
    align-items: ${props => props.alignItems || "center"};
    width : ${props => props.width || "100%"};
    height : ${props => props.height || "100px"};
    border : ${props => props.border || "1px solid black"};
    box-sizing : ${props => props.border || "border-box"};
    background-color: ${props => props.backgroundColor || "white"};
    color: ${props => props.backgroundColor || " white"};
`;


function Login() {
  const [logInData, setLogInData] = useContext(UserContext);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        setLogInData({
            uid: data.user.uid,
            name : data.user.displayName,
        }); // user data 설정
        console.log(data) // console로 들어온 데이터 표시
        localStorage.setItem("uid", logInData.uid);
        localStorage.setItem("name", logInData.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Div>
      <button onClick={handleGoogleLogin}>Login</button>
    </Div>
  );
}

export default Login;