import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Journal from './pages/Journal';
import ArticleDetail from './pages/ArticleDetail';
import Brewing from './pages/Brewing';
import Recipes from './pages/Recipes';
import Origins from './pages/Origins';
import Gifts from './pages/Gifts';
import B2B from './pages/B2B';
import Sustainability from './pages/Sustainability';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-[#faf8f1] text-[#18372a]">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:id" element={<ArticleDetail />} />
            <Route path="/brewing" element={<Brewing />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/origins" element={<Origins />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/b2b" element={<B2B />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
