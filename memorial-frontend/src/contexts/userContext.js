import { createContext, useMemo } from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';


/* 유저 데이터용 컨텍스트 생성 */
export const UserContext = createContext();

/* 유저 데이터 프로바이더 생성 */
export default function UserProvider({ children }) {

  const [userData, setUserData] = useState({});
  console.log(userData.uid)
  console.log(userData.name)

//   /* 서버로부터 유저 데이터 받아오는 함수 */
//   const getData = async () => {
//     const data = await axios.get("http://3.35.236.83/pard/search/박주영");
//     setUserData(data.data.data);
//   }

//   /* 첫 렌더링 시에만 유저 데이터 받아오기 */
//   useEffect(() => {
//     getData();
//   }, []);



  /* 프로바이더로 넘겨줄 변수 구성 */
  const value = useMemo(() => [userData, setUserData], [userData, setUserData]);

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}