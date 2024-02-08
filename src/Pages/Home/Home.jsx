
import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import Sidebar from "../../Components/Sidebar";

export default function Home() {
  const [sideMenu, setSideMenu] = useState(false);

  const handleMenuClick = () => {
    setSideMenu(true);
  };

  const navlist = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Model",
      droplist: [
        {
          title: "Sea Cat 26",
          url: "/sea-cat-26",
        },
        {
          title: "Sea Cat 34",
          url: "/",
        },
      ],
    },
    {
      title: "Gallery",
      url: "/",
    },
  ];

  return (
    <main>
      <section id="NavSection">
        <img style={{
              height: 50,
              width: 210,
              objectFit: "contain",
            }} src="/seacat-logo-black.png" alt="seacat-logo.png" />

        <div className="NavItems">
          {navlist.map((item, i) => {
            return (
              <div className="NavItem" key={i}>
                {item.droplist ? (
                  <a>
                    {item.title}
                    <span>
                      <IoIosArrowDown />
                    </span>
                  </a>
                ) : (
                  <a href={item.url}>{item.title}</a>
                )}

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
        </div>

        <button className="contactBtn">Contact Us</button>
        <button onClick={handleMenuClick} className="MenuBtn">
          <IoMenu />
        </button>

        <Sidebar SideMenu={sideMenu} setSideMenu={setSideMenu} data={navlist} />
      </section>

      <section id="HeaderSection">
        <img src="/header.png" alt="header image" className="headerImg" />
        <h1 className="headerText">Build Your Boat</h1>
      </section>

      <section id="CardSection">
        <div>
          <div className="detail">
            <h2>Sea Cat 26</h2>
            <Link to="/sea-cat-26">
              <button>Build Your Boat</button>
            </Link>
          </div>

          <div className="image">
            <div></div>
            <span>
            <img src="/seacat-26.png" alt="seacat-26 image" />
            </span>
          </div>
        </div>

        <div>
          <div className="detail">
            <h2>Sea Cat 34</h2>

            <button>Coming soon</button>
          </div>

          <div className="image">
            <div></div>
            <span>
              Coming
              <br />
              Soon
            </span>
          </div>
        </div>
      </section>

      <section id="NoteSection">
        <p>
          This is a simulated representation of our models, actual color / shape
          may differ. Contact our facility regarding your specific order.
        </p>
      </section>

      <section id="FooterSection">
        <p>
          Copyright © Sea Cat. All Rights Reserved. |{" "}
          <a href="/">Privacy Policy</a> |{" "}
          <a href="https://flymediaco.com/">Fly Media Co.</a>
        </p>
      </section>
    </main>
  );
}
