import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-300 shadow-sm">
      <div className="max-w-full mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">PRAN</span>
            <span className="text-2xl font-bold text-green-600 ml-1">RFL</span>
            <span className="ml-2 text-lg font-medium text-gray-700">Careers</span>
          </Link>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
            LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;