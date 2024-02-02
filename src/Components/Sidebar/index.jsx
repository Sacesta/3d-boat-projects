import React from "react";
import "./index.css";
import { RxCross1 } from "react-icons/rx";
import { FaPlus, FaMinus } from "react-icons/fa";


function Sidebar({ SideMenu, setSideMenu, data }){
  const sidebarStyle = SideMenu ? { transform: "translateX(-100%)" } : {};

  const handleButtonClick = () => {
    setSideMenu(false);
  };

  return (
    <aside className="Sidebar" style={sidebarStyle}>
      <div className="heading">

        <button
          onClick={handleButtonClick}
          className="closeBtn"
        >
            <RxCross1 />
        </button>

        <button className="contactBtn">
         contact us
        </button>
      </div>

      <div className="sidelinks">

      {data.map((item, i) => {
            return (
              <div className="sidelink" key={i}>
                <a href={item.url}>
                    <span>
                    {item.title}
                    </span>

                    <span className="add">
                    {item.droplist && <FaPlus/>}
                    </span>
                    <span className="sub">
                    {item.droplist && <FaMinus/>}
                    </span>
                </a>

                {item.droplist && (
                  <div className="sidedropdown">
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


     
    </aside>
  );
};

export default Sidebar;
