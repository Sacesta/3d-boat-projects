import React, {useState} from "react";
import "./index.css";
import Sidebar from "../Sidebar";
import { IoMenu } from "react-icons/io5";


export default function Navbar() {

  const [sideMenu, setSideMenu] = useState(false);

  const handleMenuClick = () => {
    setSideMenu(true);
  };


  const navlist = [
    {
      title: "catalog",
      url: "https://landauboats.com/catalog/",
    },
    {
      title: "warranty",
      url: "https://landauboats.com/garranty/",
    },
    {
      title: "find a dealer",
      url: "https://landauboats.com/find-a-dealer/",
    },
    {
      title: "parts",
      url: "https://landauboats.com/parts/",
    },
    {
      title: "landau series",
      url: "#",
      droplist: [
        {
          title: "a'lure",
          url: "https://landauboats.com/alure/",
        },
        {
          title: "island breeze",
          url: "https://landauboats.com/island-breeze-3/",
        },
        {
          title: "atlantis",
          url: "https://landauboats.com/atlantis/",
        },
        {
          title: "signature",
          url: "https://landauboats.com/signature-2/",
        },
      ],
    },
  ];
  

  return (
    <div className="navbar">
      <div className="navbarCon">
        <div className="logo">
          <a href="/">
          <img src="/logo.svg" alt="" />
          </a>
        </div>

        <div className="Navlinks">
          {navlist.map((item, i) => {
            return (
              <div className="Navlink" key={i}>
                <a href={item.url}>{item.title}</a>

                {item.droplist && (
                  <div className="dropdown">
                    {item.droplist.map((drop, ind) => {
                      return (
                        <a key={ind} href={drop.url}>
                          {drop.title}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          <button onClick={handleMenuClick} className="menuBtn">
            <IoMenu/>
          </button>

          <button className="contact">contact us</button>
        </div>
          <Sidebar SideMenu={sideMenu} setSideMenu={setSideMenu} data={navlist} />
      </div>
    </div>
  );
}
