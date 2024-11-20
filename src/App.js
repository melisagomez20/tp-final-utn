// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Login from './pages/Login'; // Importamos el Login

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />  {/* Ruta para el login */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
