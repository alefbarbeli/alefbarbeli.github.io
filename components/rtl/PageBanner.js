import Link from "next/link";

const PageBanner = ({ pageName, pageLink }) => {
  return (
    <div className="section started" style={{ height: "96vh" }}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <div className="h-title glitch-effect" data-text={pageName}>
              {pageName}
            </div>
            <div className="h-subtitle typing-bread">
              <p>
                <Link href="index-rtl">الصفحة الرئيسية</Link> /{" "}
                <Link href={pageLink}>{pageName}</Link>
              </p>
            </div>
            <span className="typed-bread" />
          </div>
        </div>
      </div>
      <a href="#" className="mouse_btn">
        <span className="ion ion-mouse" />
      </a>
    </div>
  );
};
export default PageBanner;
