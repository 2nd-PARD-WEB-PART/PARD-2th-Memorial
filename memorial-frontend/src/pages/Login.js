import { auth } from '../fbase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/userContext';
// import Test from './Test';

function Login() {
  const [userData, setUserData, updateData] = useContext(UserContext);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        setUserData({
            uid: data.user.uid,
            name : data.user.displayName,
        }); // user data 설정
        console.log(data) // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      {/* <Test></Test> */}
      <button onClick={handleGoogleLogin}>Login</button>
      {userData ? userData.displayName : null}
    </div>
  );
}

export default Login;