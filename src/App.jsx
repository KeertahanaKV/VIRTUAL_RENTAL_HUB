import Header from "./components/Header";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Privacy from "./components/pages/Privacy";
import Welcome from "./components/pages/Welcome";
import AddProperty from "./components/pages/AddProperty";
import RentersSearch from "./components/pages/RentersSearch"
import Favorites from "./components/pages/Favorites";
import { PropertyProvider } from "./components/PropertyContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <PropertyProvider>
    <Router>
      <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-property" element={<AddProperty />}/>
          <Route path="/renters-search" element={<RentersSearch />}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        </div>
      </div>
    </Router>
    </PropertyProvider>
  );
}
