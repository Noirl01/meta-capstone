import "./main.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import MenuPage from "./Components/MenuPage";
import AboutPage from "./Components/AboutPage";
import ReservePage from "./Components/ReservePage";
import OrderPage from "./Components/OrderPage";
import LoginPage from "./Components/LoginPage";


function App() {
  return (
    <div class="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reservation" element={<ReservePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
