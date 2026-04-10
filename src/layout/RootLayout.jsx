// RootLayout.jsx
import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/Shared/Navbar/NavBar';
import Footer from '../Components/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        
        <div className="flex flex-col min-h-screen">
            <NavBar/>
            
            
            <main className="flex-grow">
                <Outlet/>
            </main>

            <Footer/>
            <ToastContainer />
        </div>
    );
};

export default RootLayout;