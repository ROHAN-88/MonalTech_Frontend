import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";

import { AboutUs } from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Fallback from "./pages/Fallback";
import Notfound from "./pages/Notfound";
import Partner from "./pages/Partner";
import Products from "./pages/Products";
import Services from "./pages/Services";
import IndexPage from "./IndexPage";
import Layout from "./Layout";
import { UserContextProvider } from "./UserContext";

import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <Router>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/fallback" element={<Fallback />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </Router>
  );
}

export default App;
