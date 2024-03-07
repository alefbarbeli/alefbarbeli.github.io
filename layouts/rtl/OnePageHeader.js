"use client";
import { useEffect, useState } from "react";

const OnePageHeader = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll(".section_");
      const navLi = document.querySelectorAll(".top-menu li");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        if (current !== null) {
          li.classList.remove("active");
        }
        if (
          li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`
        ) {
          li.classList.add("active");
        }
      });
    });
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    document.querySelector("body").classList.toggle("loaded");
    setToggle(!toggle);
  };

  return (
    <header className={toggle ? "active" : ""}>
      <div className="head-top">
        <a href="#" className="menu-btn" onClick={(e) => onClick(e)}>
          <span />
        </a>
        <div className="top-menu">
          <ul>
            <li className="">
              <a href="#section-resume" className="lnk">
                استئنف
              </a>
            </li>
            <li className="">
              <a href="#section-works" className="lnk">
                مكون، ماهية، تصميم
              </a>
            </li>
            <li className="">
              <a href="#section-blog" className="lnk">
                مدونة
              </a>
            </li>
            <li>
              <a href="#section-contacts" className="btn">
                جهات الاتصال
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default OnePageHeader;
