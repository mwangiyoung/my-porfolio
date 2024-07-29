import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Pages/Layout.jsx";
import Contact from "../Pages/Contact.jsx";
import Home from "../Pages/Home.jsx";
import Projects from "../Pages/Projects.jsx";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/home" element={<Layout><Home/></Layout>} />
        <Route path="/projects" element={<Layout><Projects/></Layout>} />     
        </Routes>

    </BrowserRouter>
  );
}

export default Router;