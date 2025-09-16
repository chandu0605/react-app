import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Carrer from './components/carrer/Carrers';
import Home from './components/home/Home';
import Service from './components/serices/Services';
import ProductsCard from './components/products/ProductsCard';
import ProductDetails from './pages/ProdctDetails';
import ProductsPage from './pages/ProductsPage';
import './App.css';


function App() {

  return (
    <Router>
      <div>
        

        
        <nav>
          <Link to="/">Home</Link> {" "}
          <Link to="/carrer">Carrer</Link> {" "}
          <Link to="/service">Service</Link> {" "}
          <Link to="/products">Products</Link>
        </nav>

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrer" element={<Carrer />} />
          <Route path="/service" element={<Service />} />
          <Route path="/products" element={<ProductsPage />} />
         <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
