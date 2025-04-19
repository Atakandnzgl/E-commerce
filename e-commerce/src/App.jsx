import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import PageContent from "./components/Layout/PageContent";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;