import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import ViewPage from './pages/ViewPage';
function App() {

  // case 현중
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index="index" element={<HomePage />} />
        <Route path="/AddPage" element={<AddPage />} />
        <Route path = "/ViewPage" element = {<ViewPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
