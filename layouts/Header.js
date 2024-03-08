"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = ({ dark }) => {
  const [toggle, setToggle] = useState(false);
  const onClick = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  const [pathname, setPathname] = useState("home");
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <header className={toggle ? "active" : ""}>
      <div className="head-top">
        <a href="#" className="menu-btn" onClick={(e) => onClick(e)}>
          <span />
        </a>
        <div className="top-menu">
          <ul>
            <li className={pathname.includes("index") || pathname == '/' ? "active" : ""}>
              <Link href={`index${dark ? "-dark" : ""}`} className={`lnk`}>
                Home
              </Link>
            </li>
            <li className={pathname.includes("resume") ? "active" : ""}>
              <Link href={`resume${dark ? "-dark" : ""}`} className={`lnk`}>
                Resume
              </Link>
            </li>
            <li className={pathname.includes("portfolio") ? "active" : ""}>
              <Link href={`portfolio${dark ? "-dark" : ""}`} className="lnk">
                Portfolio
              </Link>
            </li>
            <li className={pathname.includes("contacts") ? "active" : ""}>
              <Link href={`contacts${dark ? "-dark" : ""}`} className="btn">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
