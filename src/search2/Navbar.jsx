import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import { useDispatch, useSelector } from "react-redux";
import { logo, cart, favorites, user } from "../assets/images/index.js";
import {
  FiUser,
  MdFavoriteBorder,
  MdOutlineContactPage,
  BsCart3,
  CiSearch,
  GiHamburgerMenu,
  FaXmark,
  IoHomeOutline,
  LiaBookSolid,
  RiBloggerLine,
} from "../assets/icons/icons.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const CartProducts = useSelector((state) => state.cart.CartArr);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [dataFilter, setDataFilter] = useState([]);
  const [hidden, setHidden] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleInputChange = (value) => {
    setQuery(value);
    setHidden(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${query}`);
      setHidden(true);
      setIsMenuOpen(false);
      setQuery("");
    }
  };

  const handleSelect = (title) => {
    setQuery(title);
    navigate(`/search?q=${title}`);
    setHidden(true);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (query) {
      fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {
          setDataFilter(
            data.products.filter((item) => {
              return (
                item &&
                item.title &&
                item.title.toLowerCase().includes(query.toLowerCase())
              );
            })
          );
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [query]);

  const navItems = [
    {
      link: "Home",
      path: "/",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Contact",
      path: "contact",
    },
    {
      link: "Blog",
      path: "blog",
    },
  ];

  const iconItems = [
    {
      icon: favorites,
      path: "favorites",
    },
    {
      icon: cart,
      path: "shopping-cart",
    },
    {
      icon: user,
      path: "user",
    },
  ];

  const navIconItems = [
    {
      link: <IoHomeOutline />,
      path: "/",
      ext: "Home",
    },
    {
      link: <MdFavoriteBorder />,
      path: "favorites",
      ext: "Favorites",
    },
    {
      link: <BsCart3 />,
      path: "shopping-cart",
      ext: "Carts",
    },
    {
      link: <FiUser />,
      path: "user",
      ext: "User",
    },
    {
      link: <LiaBookSolid />,
      path: "about",
      ext: "About",
    },
    {
      link: <RiBloggerLine />,
      path: "blog",
      ext: "Blog",
    },
    {
      link: <MdOutlineContactPage />,
      path: "contact",
      ext: "Contact",
    },
  ];

  const totalProducts = CartProducts.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <>
      <nav>
        <div className="flex h-[88px] bg-white items-center xl:px-40 px-4 justify-between font-sf-pro fixed top-0 left-0 right-0 z-50">
          <div className="flex">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          {/* search  */}
          <div className="relative">
            <div className="border-none outline-none bg-search-gray rounded-lg h-14 w-search p-4 items-center space-x-2 lg:flex hidden">
              <CiSearch className="text-promo-gray text-2xl" />
              <input
                className="bg-transparent border-none outline-none w-full"
                type="text"
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyDown={handleKeyDown}
                value={query}
                placeholder="Search"
              />
              {!hidden && (
                <SearchFilter
                  dataTakeFromNavbar={dataFilter}
                  onSelect={handleSelect}
                />
              )}
            </div>
          </div>
          {/* tabPage  */}
          <ul className="space-x-tabSpace lg:flex items-center hidden">
            {navItems.map(({ link, path }) => (
              <li key={link}>
                <Link className="text-promo-gray" to={path}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          {/* icon  */}
          <ul className="space-x-6 lg:flex items-center hidden">
            {iconItems.map(({ icon, path }) => (
              <li key={path} className="relative">
                <Link className="flex items-center" to={path}>
                  <img className="text-iconSize" src={icon} alt={path} />
                  {icon === cart && totalProducts > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {totalProducts}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          {/* hamburger  */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#080341] text-hamburgerSize"
            >
              {isMenuOpen ? <FaXmark /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* navItem mobile  */}
      <nav>
        <div
          className={`flex flex-col space-y-3 bg-white lg:hidden p-6 font-sf-pro fixed w-full h-full overflow-y-auto transition-all duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* spacing nav  */}
          <div className="h-[88px]"></div>

          {/* search  */}
          <div className="relative flex border border-gray-300 rounded-lg items-center space-x-2 p-3">
            <CiSearch className="text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none text-base w-full"
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyDown={handleKeyDown}
              value={query}
            />
            {!hidden && (
              <SearchFilter
                dataTakeFromNavbar={dataFilter}
                onSelect={handleSelect}
              />
            )}
          </div>

          {/* icon  */}
          <ul className="flex flex-col space-y-4 mt-4">
            {navIconItems.map(({ link, path, ext }) => (
              <li key={ext}>
                <Link
                  className="flex items-center text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  to={path}
                  onClick={toggleMenu}
                >
                  <span className="mr-4 text-xl">{link}</span>
                  {ext}
                  {ext === "Carts" && totalProducts > 0 && (
                    <span className="ml-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {totalProducts}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
