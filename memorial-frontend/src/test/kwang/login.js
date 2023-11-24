import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const handleLogin = async (e, navigate) => {
    e.preventDefault();

    // 사용되는 변수
    const userEmail = e.target.userEmail.value; // 이메일 
    const userPassword = e.target.userPassword.value; // 비밀번호

    try {
        // axios 구현 (post 생성)
        const response = await axios.post("http://172.17.200.74:8080/api/v1/auth/signin", {
            userEmail: userEmail, // 이메일
            userPassword: userPassword // 비밀번호
        });
        
        if (response.data.result) {
            console.log("로그인 성공!.", response.data.result);
            navigate('/loginok');
        }
        else 
            console.log("로그인 실패!.", response.data.result);
        
    } catch (error) {
        // cases for errors
        if (error.response) {
            // 서버가 응답을 반환하지만 응답 코드가 2xx가 아닌 경우
            console.error("로그인 에러 - 서버 응답:", error.response.data);
        } else if (error.request) {
            // 서버에 요청을 보냈지만 응답을 받지 못한 경우
            console.error("로그인 에러 - 응답 없음:", error.request);
        } else {
            // 요청을 보내기 전에 발생한 오류
            console.error("로그인 에러:", error.message);
        }
    }
};

function Login() {
    const navigate = useNavigate();

    return (
        <div>
            <form onSubmit={(e) => handleLogin(e, navigate)}>
                <label>이메일</label>
                <input type="email" name="userEmail" />
                <br />
                <label>비밀번호</label>
                <input type="password" name="userPassword" />
                <br />
                <button type="submit" name="signIn">로그인</button>
            </form>
        </div>
    );
}

export default Login;
