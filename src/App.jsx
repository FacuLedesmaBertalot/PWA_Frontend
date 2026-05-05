import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/heroSection';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import { Details } from './pages/Details/Details'; 
import { ProductNotFound } from './pages/ProductNotFound/ProductNotFound'; 
import { Favorites } from './pages/Favorites/Favorites';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item/:id" element={<Details />} />
            <Route path="*" element={<ProductNotFound />} />
            <Route path="/favoritos" element={<Favorites />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;