import Header from "./components/Header";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Privacy from "./components/pages/Privacy";
import Welcome from "./components/pages/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}
