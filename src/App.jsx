import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS JavaScript

// Initialize AOS

AOS.init({
  duration: 1200, // Duration of the animations
  easing: 'ease-in-out', // Easing function for animations
  once: true, // Whether animation should happen only once - while scrolling down
});

function App() {
  return (
    <UserContextProvider>
      <Router>
        
        <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
          {/* Uncomment when needed */}
          {/* <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/our-clients' element={<OurClient />} />
          <Route path='/solutions' element={<Solution />} /> */}
        </Routes>
        <Footer />
      </Router>
    </UserContextProvider>
  );
}

export default App;
