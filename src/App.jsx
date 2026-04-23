import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/heroSection';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <h1 className='text-center text-5xl uppercase pt-16'>Tempo Deluxe</h1>
            </>
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;