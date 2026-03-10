import { Routes, Route } from "react-router-dom";

import ScrollToHash from "./components/ScrollToHash";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // <-- import here

import Home from "./Pages/Home";
import About from "./Pages/About";
import Agent from "./Pages/Agent";
import Commercial from "./Pages/Commercial";
import Investor from "./Pages/Investor";
import Wholesale from "./Pages/wholesale";
import Contact from "./Pages/Contact";

function App() {
    return (
        <>
            <ScrollToTop />
            <ScrollToHash />

            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Agent" element={<Agent />} />
                    <Route path="/Commercial" element={<Commercial />} />
                    <Route path="/Investor" element={<Investor />} />
                    <Route path="/Wholesale" element={<Wholesale />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;