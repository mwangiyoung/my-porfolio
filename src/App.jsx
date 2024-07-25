

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./Pages/Layout";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";

function App() {
  return (
    <Router>
      <Routes>
      
      <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/About" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/home" element={<Layout><Home/></Layout>} />
        <Route path="/projects" element={<Layout><Projects/></Layout>} />  
      </Routes>
    </Router>
  );
}



export default App;
