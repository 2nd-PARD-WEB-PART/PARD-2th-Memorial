import {Link} from "react-router-dom";
import { Outlet } from 'react-router-dom';
import { Div, Menu } from '../components/box';

function Layout() {
    return (
        <div>
            <Div justifyContent = "start" height = "40px">
                <Link to="/"><Menu>버르장 온라인 장례식</Menu></Link>
                <Link to="/AddPage"><Menu>장례식 신청하기</Menu></Link>
                <Link to="/ViewPage"><Menu>남의 버릇 구경가기</Menu></Link>
            </Div>

            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;