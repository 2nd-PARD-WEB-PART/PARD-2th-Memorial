
import { useContext } from "react";
import { UserContext } from "./userContext";

/* 페이지 출력 */
function UserName() {

    const [userName, setUserName, updateName] = useContext(UserContext);
    return (

        <div>{userName}</div>

    );
}

export default UserName;
