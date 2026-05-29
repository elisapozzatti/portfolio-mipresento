import React, { useState } from "react";
function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src="/fotoCV.JPEG" className="logo" />
        <h1>Elisa Pozzatti</h1>
        <a
          href="/CV.pdf"
          download
          style={{
            textDecoration: "none",
            color: "white",
            marginLeft: "auto",
          }}
        >
          <img src="cv.png" style={{ height: "50px" }} />
        </a>
      </header>
    </div>
  );
}

export default Header;
