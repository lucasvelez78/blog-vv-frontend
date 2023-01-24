import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Register from "./pages/registration";
import Contact from "./pages/contact";
import Products from "./pages/products";
import Posts from "./pages/posts";
import ProductDetail from "./pages/product-detail";
import Purchased from "./pages/purchased";
import Viviana from "./pages/viviana";
import LogIn from "./pages/logIn";
import { LogProvider } from "./context/logContext";

function App() {
  return (
    <BrowserRouter>
      <LogProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/:product" element={<ProductDetail />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/purchased" element={<Purchased />} />
          <Route path="/viviana" element={<Viviana />} />
        </Routes>
      </LogProvider>
    </BrowserRouter>
  );
}

export default App;
