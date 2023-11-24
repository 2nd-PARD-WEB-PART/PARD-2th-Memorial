import React, { useState } from "react";
import axios from "axios";

function HJLogin() {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // 새로고침 방지

    try {
      const response = await axios.post(
        "http://172.17.200.74:8080/api/v1/auth/signin",
        {
          // 스웨거의 property에 맞춰서 key, value 설정하기.
          userEmail: userEmail,
          userPassword: userPassword,
        }
      );

      // login 성공 여부
      if (response.data.result) {
        console.log("로그인 성공!");
      } else {
        console.log("로그인 실패!");
      }

    } catch (error) {
      console.error("에러" + error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">이메일:</label>
      <input
        type="email"
        id="userEmail"
        name="userEmail"
        value={userEmail}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">비밀번호:</label>
      <input
        type="password"
        id="userPassword"
        name="userPassword"
        value={userPassword}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">로그인</button>
    </form>
  );
}

export default HJLogin;
