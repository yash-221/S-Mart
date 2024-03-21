import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Category from './Components/Category';
import { Route, Routes } from 'react-router-dom';
import Testimonial from './Components/Testimonial';
import Track from './Components/Track';
import Footer from './Components/Footer';
// import Data from './Components/data';

const App = () => {
  // Assuming transformedData is available here
  const transformedData = [
    {
      categoryName: 'Laptops',
      image: 'https://testapi.arbsindia.com/public/default.png',
      // You can include other details from transformedData if needed
    }
    // Include other categories similarly
  ];

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/category" element={<Category transformedData={transformedData} />} />
        {/* <Route path="/data" element={<Data />} /> */}
      </Routes>
      <Track />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
