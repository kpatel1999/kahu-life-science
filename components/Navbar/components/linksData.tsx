// Import Icons
import { BiHome } from "react-icons/bi";
import { ImInfo } from "react-icons/im";
import { FaTelegramPlane, FaGlobeAmericas } from "react-icons/fa";
import { RiProductHuntLine } from "react-icons/ri";

const linksData = [
  {
    title: "Home",
    url: "/",
    Icon: <BiHome size={16} />,
  },
  {
    title: "Products",
    url: "/products",
    Icon: <RiProductHuntLine size={16} />,
  },
  {
    title: "Global Rresence",
    url: "/games",
    Icon: <FaGlobeAmericas size={16} />,
  },
  {
    title: "FAQ",
    url: "/faq",
    Icon: <FaGlobeAmericas size={16} />,
  },
  {
    title: "About",
    url: "/blog",
    Icon: <ImInfo size={16} />,
  },
  {
    title: "Contact",
    url: "/contact",
    Icon: <FaTelegramPlane size={16} />,
  },
];

export default linksData;
