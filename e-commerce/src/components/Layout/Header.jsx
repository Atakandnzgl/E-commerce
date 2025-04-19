import { ShoppingCart } from "lucide-react";



function Header(){
    return (
        <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
        <h1 className="text-xl font-bold text-gray-800">Shopora</h1>
        <button className="relative">
          <ShoppingCart className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            2
          </span>
        </button>
      </header>  
    );
}

export default Header;