"use client";
import { context } from "@/context/context";
import FsLightbox from "fslightbox-react";
import Isotope from "isotope-layout";
import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const galleryImages = {
  1: [
    "images/works/work1.jpg",
    "images/works/work2.jpg",
    "images/works/work3.jpg",
    "images/works/work4.jpg",
  ],
  2: [
    "images/works/work5.jpg",
    "images/works/work2.jpg",
    "images/works/work3.jpg",
    "images/works/work4.jpg",
  ],
};

const RecentWorks = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  const [activeGallaryImage, setActiveGallaryImage] = useState(1);
  const [gallery, setGallery] = useState(false);

  const { modalToggle, setPortfolioModal } = useContext(context);

  return (
    <Fragment>
      <FsLightbox
        toggler={gallery}
        sources={galleryImages[activeGallaryImage]}
      />
      <div className="section works" id="section-works">
        <div className="content">
          <div className="title">
            <div className="title_inner">الأعمال الأخيرة</div>
          </div>
          <div className="filter-menu">
            <div className="filters">
              <div className="btn-group">
                <label
                  data-text="الكل"
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".box-item"
                  />
                  الكل
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="فيديو"
                  className={`c-pointer ${activeBtn("f-video")}`}
                  onClick={handleFilterKeyChange("f-video")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-video" />
                  فيديو
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="موسيقى"
                  className={`c-pointer ${activeBtn("f-music")}`}
                  onClick={handleFilterKeyChange("f-music")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-music" />
                  موسيقى
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="الروابط"
                  className={`c-pointer ${activeBtn("f-links")}`}
                  onClick={handleFilterKeyChange("f-links")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-links" />
                  الروابط
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="صورة"
                  className={`c-pointer ${activeBtn("f-image")}`}
                  onClick={handleFilterKeyChange("f-image")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-image" />
                  صورة
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="صالة عرض"
                  className={`c-pointer ${activeBtn("f-gallery")}`}
                  onClick={handleFilterKeyChange("f-gallery")}
                >
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".f-gallery"
                  />
                  صالة عرض
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="يحتوي"
                  className={`c-pointer ${activeBtn("f-content")}`}
                  onClick={handleFilterKeyChange("f-content")}
                >
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".f-content"
                  />
                  يحتوي
                </label>
              </div>
            </div>
          </div>
          <div className="box-items portfolio-items">
            <div className="box-item f-gallery">
              <div className="image">
                <a
                  href="#gallery-1"
                  className="has-popup-gallery"
                  onClick={() => {
                    setGallery(!gallery);
                    setActiveGallaryImage(1);
                  }}
                >
                  <img src="images/works/work1.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-images" />
                      </span>
                    </span>
                  </span>
                </a>
                <div id="gallery-1" className="mfp-hide">
                  <a href="images/works/work1.jpg" />
                  <a href="images/works/work2.jpg" />
                  <a href="images/works/work3.jpg" />
                  <a href="images/works/work4.jpg" />
                </div>
              </div>
              <div className="desc">
                <div className="category">صالة عرض</div>
                <a href="#gallery-1" className="name has-popup-gallery">
                  قماش حمل حقيبة MockUp
                </a>
              </div>
            </div>
            <div className="box-item f-video">
              <div className="image">
                <a
                  href="https://youtu.be/S4L8T2kFFck"
                  className="has-popup-video"
                >
                  <img src="images/works/work2.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">فيديو</div>
                <a
                  href="https://youtu.be/S4L8T2kFFck"
                  className="name has-popup-video"
                >
                  فنجان قهوة في اليد
                </a>
              </div>
            </div>
            <div className="box-item f-links">
              <div className="image">
                <a
                  href="https://beshley.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work8.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">الروابط</div>
                <a href="https://beshley.com/" className="name has-popup-link">
                  الحب والرعاية زجاجات السيراميك
                </a>
              </div>
            </div>
            <div className="box-item f-image">
              <div className="image">
                <a href="images/works/work4.jpg" className="has-popup-image">
                  <img src="images/works/work4.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-image" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">صورة</div>
                <a
                  href="images/works/work4.jpg"
                  className="name has-popup-image"
                >
                  حقيبة هدايا التسوق
                </a>
              </div>
            </div>
            <div className="box-item f-gallery">
              <div className="image">
                <a
                  href="#gallery-2"
                  onClick={() => {
                    setGallery(!gallery);
                    setActiveGallaryImage(2);
                  }}
                  className="has-popup-gallery"
                >
                  <img src="images/works/work5.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-images" />
                      </span>
                    </span>
                  </span>
                </a>
                <div id="gallery-2" className="mfp-hide">
                  <a href="images/works/work5.jpg" />
                  <a href="images/works/work2.jpg" />
                  <a href="images/works/work3.jpg" />
                  <a href="images/works/work4.jpg" />
                </div>
              </div>
              <div className="desc">
                <div className="category">صالة عرض</div>
                <a href="#gallery-2" className="name has-popup-gallery">
                  أموري ميو ثلاثة أكواب
                </a>
              </div>
            </div>
            <div className="box-item f-music">
              <div className="image">
                <a
                  href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  className="has-popup-music"
                >
                  <img src="images/works/work6.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-music-note" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">موسيقى</div>
                <a
                  href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true"
                  className="name has-popup-music"
                >
                  ملصق مارتا فيلودو الجميل
                </a>
              </div>
            </div>
            <div className="box-item f-image">
              <div className="image">
                <a href="images/works/work7.jpg" className="has-popup-image">
                  <img src="images/works/work7.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-image" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">صورة</div>
                <a
                  href="images/works/work7.jpg"
                  className="name has-popup-image"
                >
                  الحد الأدنى للإطار الملصق
                </a>
              </div>
            </div>
            <div className="box-item f-content">
              <div className="image">
                <a
                  href="#popup-1"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                  }}
                  className="has-popup-media"
                >
                  <img src="images/works/work3.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">يحتوي</div>
                <a
                  href="#popup-1"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                  }}
                  className="name has-popup-media"
                >
                  صندوق من الورق المقوى
                </a>
              </div>
            </div>
            <div className="box-item f-content">
              <div className="image">
                <a
                  href="#popup-2"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                  }}
                  className="has-popup-media"
                >
                  <img src="images/works/work3.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">يحتوي</div>
                <a
                  href="#popup-2"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                  }}
                  className="name has-popup-media"
                >
                  صندوق من الورق المقوى
                </a>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorks;
