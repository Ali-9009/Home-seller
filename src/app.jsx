import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
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
            <Header />

            <main className="">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/agent" element={<Agent />} />
                    <Route path="/commercial" element={<Commercial />} />
                    <Route path="/investor" element={<Investor />} />
                    <Route path="/wholesale" element={<Wholesale />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;
