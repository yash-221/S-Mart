// *Empty App.js file to be used as a template for future components

import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Testimonial from './Components/Testimonial';
import Track from './Components/Track';
import Footer from './Components/Footer';

const App = () => {

    return (

        <>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
            </Routes>
            <Track />
            <Testimonial />
            <Footer />
        </>
    );
};

export default App;
