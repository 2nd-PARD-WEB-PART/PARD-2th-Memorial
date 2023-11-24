import {Link} from "react-router-dom";
import { Outlet } from 'react-router-dom';
import { Div } from '../components/box';

function Layout() {
    return (
        <div>
            <Div>
                <Link to="/">HomePage</Link>
                <Link to="/AddPage">AddPage</Link>
                <Link to="/ViewPage">ViewPage</Link>
            </Div>

            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;