import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';
import Private from './component/Private';
import Navbar from './component/Navbar';
import '../styles/index.css';

const Layout = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/private" element={<Private />} />
            <Route path="/" element={<Login />} />
        </Routes>
    </BrowserRouter>
);

ReactDOM.render(<Layout />, document.getElementById('root')); // Ensure 'root' matches the id in index.html