import {Link} from "react-router-dom";
import {Outlet} from 'react-router-dom';

function Layout() {
    return (
        <div>
            <div>
                <Link to="/">HomePage</Link>
                <br/>
                <Link to="/AddPage">AddPage</Link>
                <br/>
                <Link to="/ViewPage">ViewPage</Link>
            </div>

            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;