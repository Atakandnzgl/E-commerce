import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">E-Ticaret</h1>
      <nav className="flex gap-4">
        <Link to="/" className="text-blue-600">Ana Sayfa</Link>
        <Link to="/product" className="text-blue-600">Ürünler</Link>
      </nav>
    </header>
  );
}

export default Header;


