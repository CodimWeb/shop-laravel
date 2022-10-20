import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Register from "./pages/Registration";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path='/registration' element={<Register/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
