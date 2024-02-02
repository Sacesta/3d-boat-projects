import React from "react";
import "./index.css";
import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const data = [
  {
    title: "Quick Links",
    items: [
      {
        name: "catalog",
        link: "https://landauboats.com/catalog/",
      },
      {
        name: "warranty",
        link: "https://landauboats.com/garranty/",
      },
      {
        name: "find a dealer",
        link: "https://landauboats.com/find-a-dealer/",
      },
      {
        name: "parts",
        link: "https://landauboats.com/parts/",
      },
    ],
  },
  {
    title: "Series",
    items: [
      {
        name: "a'lure",
        link: "https://landauboats.com/alure/",
      },
      {
        name: "island breeze",
        link: "https://landauboats.com/island-breeze-3/",
      },
      {
        name: "atlantis",
        link: "https://landauboats.com/atlantis/",
      },
      {
        name: "signature",
        link: "https://landauboats.com/signature-2/",
      },
    ],
  },
];

const footerData = [
  {
    links: [
      { name: "terms", link: "/terms" },
      { name: "privacy policy", link: "/policy" },
      { name: "legal notice", link: "/notice" },
      { name: "accessibility", link: "/accessibility" },
    ],
  },
  {
    logos: [
      { link: "https://youtube.com/", comp: <FaYoutube /> },
      { link: "https://facebook.com/", comp: <FaFacebook /> },
      { link: "https://twitter.com/", comp: <FaTwitter /> },
      { link: "https://instagram.com/", comp: <FaInstagram /> },
      { link: "https://linkedin.com/", comp: <FaLinkedin /> },
    ],
  },
];

export default function FooterComp() {
  return (
    <div className="footer">
      <div className="footerCon">
        {/* <div className="first">
          <div className="logoCon">
            <a href="/">
              <img src="/logoWhite.svg" alt="" />
            </a>
            <p>
              luxury pontoon boat from an <br />
              independent, family-owned manufacturer
            </p>
          </div>

          <div className="links_group">
            {data.map((category, index) => (
              <div className="links" key={index}>
                <h4>{category.title}</h4>
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <form action="">
            <h2>
              Subscribe to the <br />
              newsletter
            </h2>

            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email..."
              />
              <button type="submit">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.3432 0.928941L19.7071 7.2929C20.0976 7.68343 20.0976 8.31659 19.7071 8.70712L13.3432 15.0711C12.9526 15.4616 12.3195 15.4616 11.9289 15.0711C11.5384 14.6806 11.5384 14.0474 11.9289 13.6569L16.5858 9.00001C16.5858 9.00001 3.00006 9.00001 1.50002 9.00001C-2.55108e-05 9.00001 1.52588e-05 7.00001 1.50002 7.00001C3.00002 7.00001 16.5858 7.00001 16.5858 7.00001L11.9289 2.34315C11.5384 1.95263 11.5384 1.31947 11.9289 0.928941C12.3195 0.538416 12.9526 0.538416 13.3432 0.928941Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div className="line"></div> */}
        <div className="second">
          <p>Copyright © Landau Boats. All Rights Reserved. | <a href="https://landauboats.com/privacy/" action="_blank">Privacy Policy</a> | <a href="https://www.flymediaco.com/" action="_blank"><b>Fly Media Co.</b> </a> </p>

          {/* <ul>
            {footerData[0].links.map((item, itemIndex) => (
              <li key={itemIndex}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>

          <div>
            {footerData[1].logos.map((item, itemIndex) => (
              <a key={itemIndex} href={item.link}>
                {item.comp}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
