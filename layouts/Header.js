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
            <li className={pathname.includes("home") || pathname == '/' ? "menu-item-has-children active" : "menu-item-has-children"}>
              <Link href={`/`} className={`lnk`}>
                Home
              </Link>
              <ul className="sub-menu">
                <li className={pathname.includes("home") || pathname == '/' ? "menu-item active" : "menu-item"}>
                  <Link href="/">Home Default</Link>
                </li>
                <li className={pathname.includes("index-dark") ? "menu-item active" : "menu-item"}>
                  <Link href="index-dark" target="_blank">Home Dark</Link>
                </li>
                <li className={pathname.includes("index-rtl") ? "menu-item active" : "menu-item"}>
                  <Link href="index-rtl" target="_blank">Home RTL</Link>
                </li>
                <li className={pathname.includes("index-onepage") ? "menu-item active" : "menu-item"}>
                  <Link href="index-onepage" target="_blank">Home Onepage</Link>
                </li>
                <li className={pathname.includes("index-onepage-dark") ? "menu-item active" : "menu-item"}>
                  <Link href="index-onepage-dark" target="_blank">Home Onepage Dark</Link>
                </li>
                <li className={pathname.includes("index-onepage-rtl") ? "menu-item active" : "menu-item"}>
                  <Link href="index-onepage-rtl" target="_blank">Home Onepage RTL</Link>
                </li>
              </ul>
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
            <li className={pathname.includes("blog") ? "active" : ""}>
              <Link href={`blog${dark ? "-dark" : ""}`} className="lnk">
                Blog
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
