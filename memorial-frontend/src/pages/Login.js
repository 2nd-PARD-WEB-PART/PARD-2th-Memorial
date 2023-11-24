import {auth} from '../fbase';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {useContext, useEffect, useState} from 'react';
import {UserContext} from '../contexts/userContext';
import styled from 'styled-components';
import {Button, Div, P, Empty, Img} from '../components/box';
import {useNavigate} from 'react-router-dom';
import MainSub from '../assets/main_sub.png';
import Main from '../assets/main.png';

function Login() {
    const [logInData, setLogInData] = useContext(UserContext);
    const navigate = useNavigate();

    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider(); // provider를 구글로 설정
        signInWithPopup(auth, provider) // popup을 이용한 signup
            .then((data) => {
                setLogInData(
                    {uid: data.user.uid, name: data.user.displayName, emailVerified: data._tokenResponse.emailVerified}
                ); // user data 설정
                console.log(data) // console로 들어온 데이터 표시

            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        if (logInData.emailVerified) {
            localStorage.setItem("uid", logInData.uid);
            localStorage.setItem("name", logInData.name);
            localStorage.setItem("emailVerified", logInData.emailVerified);
            navigate("/HomePage");
        }
    }, [logInData])
    const divStyle = {
        backgroundImage: `url(${Main})`, // 이미지 경로를 설정
        backgroundSize: 'cover', // 이미지를 커버하도록 설정
        backgroundPosition: 'center', // 이미지를 가운데 정렬하도록 설정
    }

    return (

        <Div
            style={divStyle}
            backgroundColor="none"
            border="none"
            height="calc(100vh - 40px)"
            flexDirection="column">
            <Div backgroundColor="none" border="none" height="50%" flexDirection="column">
                <P margin = "100px 0px 0px 0px" height="20px">버르장례식</P>
                <P fontSize="20px" height="30px">당신의 버릇이 잘 돌아가실 수 있도록 장례를 돕겠습니다.</P>
                <Empty></Empty>
                {/* <Link to="./AddPage"> */}
                <Img src={MainSub}></Img>
                <Button height = "100px"onClick={handleGoogleLogin}><br/>Google 로그인<br/><br/></Button>
                {/* </Link> */}
            </Div>
        </Div>
    );
}

export default Login;