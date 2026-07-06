import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="bg-[#15161d] flex justify-between items-center px-8 py-5 gap-5">

      <h1 className="text-4xl font-bold">
        <span className="text-white">Stay</span>
        <span className="text-red-600">Finder</span>
      </h1>
      <div className="flex gap-6 text-xl">
        <Link to="/"  className="text-white hover:text-purple-400" >Home</Link>
        <Link to="/hotels"  className="text-white hover:text-purple-400" >Hotels</Link>
        <Link to="/contact"  className="text-white hover:text-purple-400" >Contact</Link>
        <Link to="/wishlist"  className="text-white hover:text-purple-400" >Wishlist</Link>

      </div>

    </nav>
  );
}

