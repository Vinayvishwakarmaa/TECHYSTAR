import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";
import "./styles/footer.scss";

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/contact"
                        element={<Contact />}
                    />
                    <Route
                        path="/services"
                        element={<Services />}
                    />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
