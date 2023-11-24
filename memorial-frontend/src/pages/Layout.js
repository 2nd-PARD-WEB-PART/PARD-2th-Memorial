import {Link} from "react-router-dom";HomePage
import {Outlet} from 'react-router-dom';
import {Div, Menu} from '../components/box';

function Layout() {
    const linkStyle = {
        textDecoration: 'none', // 링크의 밑줄을 없애는 스타일
        color: 'white', // 링크의 기본 색상 사용
        transition: 'color 0.3s ease',

    };
    const hoverStyle = {
        color: 'blue', // hover 시의 색상
    };
    return (
        <div>
            <Div justifyContent="space-between" height="40px" bgColor="black">
                <Div justifyContent="start" height="40px">
                <Link to="/" style={linkStyle} activeStyle={hoverStyle}>
                    <Menu>천국 말고 홈화면으로 돌아가시기</Menu>
                </Link>
                </Div>
                <Div height="40px" justifyContent="end">
                    <Link to="/AddPage" style={linkStyle}>
                        <Menu>장례식 등록하기</Menu>
                    </Link>
                    <Link to="/MyPage" style={linkStyle}>
                        <Menu>마이페이지</Menu>
                    </Link>
                </Div>
            </Div>

            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;