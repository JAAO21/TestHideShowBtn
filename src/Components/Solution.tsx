import React, { useState } from "react";

type MenuItem = {
  title: string;
  subItems?: Array<string>;
};

type MenuConfig = { menu: Array<MenuItem> };

export default function Solution({ menu }: MenuConfig) {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const handleButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    title: string
  ) => {
    setOpenItems({ [title]: !openItems[title] });
  };

  return (
    <div className="menu-wrapper">
      {menu.map((menuData: MenuItem) => (
        <div key={menuData.title}>
          <p>{menuData.title}</p>
          {menuData.subItems && (
            <button onClick={(e) => handleButton(e, menuData.title)}>
              {openItems[menuData.title] ? "Hide" : "Expand"}
            </button>
          )}
          {openItems[menuData.title] &&
            menuData.subItems?.map((item, index) => (
              <div style={{ display: "grid" }} key={index}>
                <span>{item}</span>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
