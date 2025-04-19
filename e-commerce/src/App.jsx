import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import PageContent from "../Layout/PageContent";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PageContent>
        <Routes>
          <Route path="/" element={<Home />} />
          {<Route path="/urun" element={<Product />} />}
        </Routes>
      </PageContent>
      <Footer />
    </BrowserRouter>
  );
}

export default App;