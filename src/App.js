import React from 'react'
import Navbar from './Component/navbar'
import Box from '@mui/material/Box';
import Footer from './Component/footer'
import FirstPage from './Page-One';
import { Route, Routes } from 'react-router-dom'
import SecondPage from './Page-Second';
import ThirdPage from './Page-Third';
import FourthPage from './Page-Fourth';

function App() {
    return (
        <Box className="mb-10 w-[100%]">
            <Navbar />
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/secondpage" element={<SecondPage />} />
                <Route path="/thirdpage" element={<ThirdPage />} />
                <Route path="/fourthPage" element={<FourthPage />} />
            </Routes>

            <Footer />
        </Box>
    )
}

export default App
