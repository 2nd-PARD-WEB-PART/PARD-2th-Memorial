import { createContext, useMemo } from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';


/* 유저 데이터용 컨텍스트 생성 */
export const UserContext = createContext();

/* 유저 데이터 프로바이더 생성 */
export default function UserProvider({ children }) {

    const [userName, setUserName] = useState();

    /* 서버로부터 유저 데이터 저장하는 함수 */
    const updateName = (e) => {
        setUserName(e)
    }



    /* 프로바이더로 넘겨줄 변수 구성 */
    const value = useMemo(() => [userName, setUserName, updateName], [userName, setUserName, updateName]);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}