import { cart, favorites, user } from "../assets/images/index.js";
import {
  FiUser,
  MdFavoriteBorder,
  MdOutlineContactPage,
  BsCart3,
  IoHomeOutline,
  LiaBookSolid,
  RiBloggerLine,
} from "../assets/icons/icons.js";

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
    path: "contact_us",
  },
  {
    link: "Blog",
    path: "blog",
  },
];
const iconItems = [
  {
    name: "favorites",
    icon: favorites,
  },
  {
    name: "carts",
    icon: cart,
  },
  {
    name: "user",
    icon: user,
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
    path: "carts",
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
    path: "contact_us",
    ext: "Contact",
  },
];

export { navItems, iconItems, navIconItems };
