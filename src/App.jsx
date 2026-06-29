import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import { Details } from './pages/Details/Details'; 
import { ProductNotFound } from './pages/ProductNotFound/ProductNotFound'; 
import { Favorites } from './pages/Favorites/Favorites';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/registro" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/items/:id" element={<Details />} />
              <Route path="/favoritos" element={<Favorites />} />

              <Route path="*" element={<ProductNotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;