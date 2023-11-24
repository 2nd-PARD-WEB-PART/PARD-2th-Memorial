import {Link, useNavigate} from "react-router-dom";
import {Outlet} from 'react-router-dom';
import {Button, Div, Menu} from '../components/box';
import {useContext} from "react";
import {UserContext} from "../contexts/userContext";
import {auth} from "../fbase";
import HomeImage from "../assets/house.png";

function Layout() {

    const [logInData, setLogInData] = useContext(UserContext);
    const navigate = useNavigate();

    const linkStyle = {
        textDecoration: 'none', // 링크의 밑줄을 없애는 스타일
        color: 'white', // 링크의 기본 색상 사용
        transition: 'color 0.3s ease'
    };
    const hoverStyle = {
        color: 'blue', // hover 시의 색상
    };

    const logOutHandler = () => {
        setLogInData({});
        localStorage.clear();
        auth.signOut();
        navigate("/");

    }

    const myStyle = {
        padding: "0px 0px 0px 10px"

    }

    return (
        <div>
            <Div justifyContent="space-between" height="40px" bgColor="black">
                <Div justifyContent="start" height="40px">
                    <div style ={myStyle}>
                        <img src={HomeImage} alt="Home" width="20px"/>
                    </div>
                    <Link
                        to={localStorage.getItem('emailVerified') === 'true'
                            ? "/HomePage"
                            : "/"
}
                        style={linkStyle}
                        activeStyle={hoverStyle}>

                        <Menu >천국 말고 홈화면으로 돌아가시기</Menu>
                    </Link>
                </Div>
                <Div height="40px" justifyContent="end">
                    <Link
                        to={localStorage.getItem('emailVerified') === 'true'
                            ? "/AddPage"
                            : "/"}
                        style={linkStyle}>
                        <Menu>장례식 등록하기</Menu>
                    </Link>
                    <Link
                        to={localStorage.getItem('emailVerified') === 'true'
                            ? "/MyPage"
                            : "/"}
                        style={linkStyle}>
                        <Menu>마이페이지</Menu>
                    </Link>
                    <Button height="40px" fontSize="15px" onClick={logOutHandler}>LogOut</Button>
                </Div>
            </Div>

            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;