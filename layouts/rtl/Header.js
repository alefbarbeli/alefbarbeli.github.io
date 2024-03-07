"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = ({ dark }) => {
  const [toggle, setToggle] = useState(false);
  const onClick = (e) => {
    e.preventDefault();
    document.querySelector("body").classList.toggle("loaded");
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
            <li className={pathname.includes("resume") ? "active" : ""}>
              <Link href={`resume-rtl`} className="lnk">
                استئنف
              </Link>
            </li>
            <li className={pathname.includes("portfolio") ? "active" : ""}>
              <Link href={`portfolio-rtl`} className="lnk">
                مكون، ماهية، تصميم
              </Link>
            </li>
            <li className={pathname.includes("blog") ? "active" : ""}>
              <Link href={`blog-rtl`} className="lnk">
                مدونة
              </Link>
            </li>
            <li className={pathname.includes("contacts") ? "active" : ""}>
              <Link href={`contacts-rtl`} className="btn">
                جهات الاتصال
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
