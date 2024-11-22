import {
  AlignRight,
  Search,
  ShoppingCart,
  UserRound,
  Phone,
  Mail,
  Facebook,
  Youtube,
  Twitter,
  Instagram,
  ChevronDown,
  User,
  Heart,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <div>
        <div className="flex m-8 justify-between md:hidden">
          <h1 className="font-bold text-2xl">bWd</h1>
          <div className="flex gap-4">
            <UserRound />
            <Search />
            <ShoppingCart />
            <AlignRight
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>

        {isMenuOpen && (
          <div className="flex items-center flex-col text-[#737373]">
            <nav className="flex flex-col text-center py-4 text-xl py-3 gap-6">
              <Link to="/home">Home</Link>
              <Link to="/product">Product</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
        )}
      </div>

      <div className="hidden md:flex flex-col">
        <div className=" md:flex bg-[#252B42] text-white p-4 justify-between items-center">
          <div className="flex space-x-8 items-center">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>
          <p className="text-sm mb-2 md:mb-0">
            Follow Us and get a chance to win 80% off
          </p>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <div className="flex items-center space-x-3">
              <span>Follow Us:</span>
              <Instagram className="w-4 h-4 cursor-pointer hover:text-gray-400" />
              <Youtube className="w-4 h-4 cursor-pointer hover:text-gray-400" />
              <Facebook className="w-4 h-4 cursor-pointer hover:text-gray-400" />
              <Twitter className="w-4 h-4 cursor-pointer hover:text-gray-400" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 flex  items-center">
          <h1 className="font-bold text-2xl">bWd</h1>
          <div className="flex gap-6 ml-12 text-[#737373]">
            <Link>Home</Link>
            <div className="relative group">
              <button className="inline-flex items-center gap-x-1.5 bg-white  ring-gray-300">
                Shop
                <ChevronDown className="w-5 h-5 " />
              </button>

              <div class="absolute hidden group-hover:block bg-white shadow-lg ring-1 w-[30rem] h-[18rem] mt-2">
                <nav class="py-2 grid grid-cols-2 gap-x-12 ">
                  <div>
                    <span className="font-bold text-black block text-lg mb-4 m-4">
                      Kadın
                    </span>
                    <Link className="block px-4 py-2 ">Bags</Link>
                    <Link className="block px-4 py-2 ">Belts</Link>
                    <Link className="block px-4 py-2 ">Cosmetics</Link>
                    <Link className="block px-4 py-2 ">Bags</Link>
                    <Link className="block px-4 py-2 ">Hats</Link>
                  </div>
                  <div>
                    <span className="block text-black font-bold text-lg mb-4 m-4 ">
                      Erkek
                    </span>
                    <Link className="block px-4 py-2 ">Bags</Link>
                    <Link className="block px-4 py-2 ">Belts</Link>
                    <Link className="block px-4 py-2 ">Cosmetics</Link>
                    <Link className="block px-4 py-2 ">Bags</Link>
                    <Link className="block px-4 py-2 ">Hats</Link>
                  </div>
                </nav>
              </div>
            </div>
            <Link>About</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
            <Link>Pages</Link>
          </div>
          <div className="flex items-center text-[#23A6F0] space-x-6 ml-auto ">
            <span className="flex items-center gap-1">
              <User size={15} />
              Login / Register
            </span>
            <Search size={15} />
            <ShoppingCart size={15} />
            <Heart size={15} />
          </div>
        </div>
      </div>
    </header>
  );
}
