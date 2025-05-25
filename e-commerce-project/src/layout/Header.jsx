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
  User,
  Heart,
  ArrowDown,
} from "lucide-react";
import { useState } from "react";
import ShopDropdown from "./ShopDropdown";

export default function Header() {
  const [opening, setOpening] = useState(false);

  const toogleF = () => {
    setOpening(!opening);
  };
  return (
    <>
      <div className="nav-bar h-[70px] bg-yesil text-nane px-10 flex justify-between items-center">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-1">
            <Phone />
            <p>(225) 555-0118</p>
          </div>
          <div className="flex items-center space-x-1">
            <Mail />
            <p>michelle.rivera@example.com</p>
          </div>
        </div>

        <p>Follow Us and get a chance to win 80% off</p>

        <div className="flex space-x-3 items-center">
          <p>Follow Us :</p>
          <Facebook aria-label="Facebook" />
          <Instagram aria-label="Instagram" />
          <Youtube aria-label="YouTube" />
          <Twitter aria-label="Twitter" />
        </div>
      </div>

      <div className="nav-bar h-16 bg-white shadow-md flex justify-between px-10 items-center">
        <h3 className="font-bold text-lg">BrandName</h3>
        <ul className="flex space-x-6">
          <li>
            <a href="">Home</a>
          </li>
          <li className="flex gap-1 relative">
            <a href="">Shop</a>
            <button onClick={toogleF}>
              {opening === true ? (
                <div className="absolute z-10 -left-20 top-12">
                  <ShopDropdown />
                </div>
              ) : (
                false
              )}
              <ArrowDown className="text-stone-200 hover:text-gray-500" />
            </button>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Pages</a>
          </li>
        </ul>
        <div className="flex items-center space-x-4 text-yesil">
          <User aria-label="User" />
          <a href="">Login / Register</a>
          <a href="">
            <Search />
          </a>
          <a href="">
            <ShoppingCart />
          </a>
          <a href="">
            <Heart />
          </a>
        </div>
      </div>
    </>
  );
}
