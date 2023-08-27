import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import ProductDetails from './Components/ProductDetails';
import ScrollToTopOnNavigate from './Components/ScrollToTopOnNavigate';

function App() {
  return (
    <div className="bg-[#38383B] min-w-[280px] flex flex-col text-[#fff]">
      <Header />
      <ScrollToTopOnNavigate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop">
          <Route index element={<Shop />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
