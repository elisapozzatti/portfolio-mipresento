import React, { useState } from "react";
function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <header>
        <img src="/fotoCV.JPEG" className="logo" />
        <h1>Elisa Pozzatti</h1>
        <nav
          style={{
            marginLeft: "auto",
          }}
        >
          <img
            src="/menu.png"
            className="menu"
            onClick={() => setMenu(!menu)}
          />
          <div className={`sidebar ${menu ? "open" : ""}`}>
            <img
              src="/close.png"
              className="close"
              onClick={() => setMenu(!menu)}
            />
            <strong>
              <a href="#about" onClick={() => setMenu(!menu)}>
                ABOUT
              </a>
            </strong>
            <strong>
              <a href="#projects" onClick={() => setMenu(!menu)}>
                PROJECTS
              </a>
            </strong>
            <strong>
              <a href="#contact" onClick={() => setMenu(!menu)}>
                CONTACT
              </a>
            </strong>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
