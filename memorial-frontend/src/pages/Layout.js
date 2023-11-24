import {Link} from "react-router-dom";
import { Outlet } from 'react-router-dom';
import { Div, Menu } from '../components/box';

function Layout() {
    return (
        <div>
            <Div justifyContent = "start" height = "40px">
                <Link to="/"><Menu>HomePage</Menu></Link>
                <Link to="/AddPage"><Menu>AddPage</Menu></Link>
                <Link to="/ViewPage"><Menu>ViewPage</Menu></Link>
            </Div>

            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;