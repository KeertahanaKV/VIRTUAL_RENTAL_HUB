import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-700 text-white p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">VIRTUAL RENTAL HUB</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/home" className="hover:text-blue-400 p-2">Home</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-400 p-2">
                Login
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 p-2">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 p-2">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-blue-400 p-2">
                Privacy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
