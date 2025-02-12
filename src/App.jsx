import { PropertyProvider } from "./components/PropertyContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Privacy from "./components/pages/Privacy";
import Welcome from "./components/pages/Welcome";
import AddProperty from "./components/pages/AddProperty";
import RentersSearch from "./components/pages/RentersSearch";
import Favorites from "./components/pages/Favorites";
import OwnerSidebar from "./components/OwnerSidebar/OwnerSidebar";
import Dashboard from "./components/OwnerSidebar/Dashboard"
import Add from "./components/OwnerSidebar/Add";
import MyListings from "./components/OwnerSidebar/Mylisting";
import AvailabilitySettings from "./components/OwnerSidebar/AvailabilitySettings";
import RenterSidebar from "./components/RenterSidebar/RenterSidebar";


function Layout({ children }) {
  const location = useLocation();

  const isHomePage = location.pathname === "/" || location.pathname === "/home";
  const isOwnerPage = ["/add-property","/dashboard","/add","/my-listings","/availability-settings"].includes(location.pathname);
  const isRenterPage = ["/renters-search", "/favorites"].includes(
    location.pathname
  );

  return (
    <div className="flex min-h-screen">
      {/*  Hide sidebar on Home page */}
      {!isHomePage && isOwnerPage && <OwnerSidebar />}
      {!isHomePage && isRenterPage && <RenterSidebar />}

      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
export default function App() {
  return (
    <PropertyProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Layout>
            <div className="container mx-auto p-4">
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/add-property" element={<AddProperty />} />
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/add" element={<Add/>}/>
                <Route path="/renters-search" element={<RentersSearch />} />
                <Route path="/my-listings" element={<MyListings/>}/>
                <Route path="/availability-settings" element={<AvailabilitySettings/>}/>
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
              </Routes>
            </div>
          </Layout>
        </div>
      </Router>
    </PropertyProvider>
  );
}
