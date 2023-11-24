import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import ViewPage from './pages/ViewPage';
import Login from './pages/Login';
import MyPage from './pages/MyPage'
import UserProvider from "./contexts/userContext";
function App() {

    // case 현중
    return (
        <UserProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index="index" element={<HomePage />}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/AddPage" element={<AddPage />}/>
                    <Route path="/ViewPage" element={<ViewPage/>}/>
                    <Route path="/MyPage" element={<MyPage/>}/>
                </Route>
            </Routes>
        </UserProvider>
    );
}

export default App;
