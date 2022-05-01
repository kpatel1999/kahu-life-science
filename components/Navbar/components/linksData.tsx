// Import Icons
import { BiHome } from "react-icons/bi";
import { CgGames } from "react-icons/cg";
import { ImInfo } from "react-icons/im";
import { FaTelegramPlane, FaGlobeAmericas } from "react-icons/fa";
import { RiProductHuntLine } from "react-icons/ri";

import { MdOutlineGeneratingTokens } from "react-icons/md";
import Image from "next/image";
import getImageUrl from "../../../utils/getImageUrl";

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
    url: "https://t.me/DoubleDiceOfficial",
    Icon: <FaTelegramPlane size={16} />,
  },
  // {
  //   title: "Metaverse",
  //   url: "https://meta.doubledice.com",
  //   Icon: <Image
  //     src={getImageUrl("/icons/vrbox.svg", true)}
  //     alt="vr"
  //     objectFit="contain"
  //     loading="lazy"
  //     height={24}
  //     width={24}
  // />
  //   ,
  // },
  // {
  //   title: "Token",
  //   url: "https://token.doubledice.com",
  //   Icon: <MdOutlineGeneratingTokens size={16} />,
  // },
];

export default linksData;
