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
      <div className="section works section_" id="section-works">
        <div className="content">
          <div className="title">
            <div className="title_inner">Recent Works</div>
          </div>
          <div className="filter-menu">
            <div className="filters">
              <div className="btn-group">
                <label
                  data-text="All"
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".box-item"
                  />
                  All
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Video"
                  className={`c-pointer ${activeBtn("f-video")}`}
                  onClick={handleFilterKeyChange("f-video")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-video" />
                  Video
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Music"
                  className={`c-pointer ${activeBtn("f-music")}`}
                  onClick={handleFilterKeyChange("f-music")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-music" />
                  Music
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Links"
                  className={`c-pointer ${activeBtn("f-links")}`}
                  onClick={handleFilterKeyChange("f-links")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-links" />
                  Links
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Image"
                  className={`c-pointer ${activeBtn("f-image")}`}
                  onClick={handleFilterKeyChange("f-image")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-image" />
                  Image
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Gallery"
                  className={`c-pointer ${activeBtn("f-gallery")}`}
                  onClick={handleFilterKeyChange("f-gallery")}
                >
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".f-gallery"
                  />
                  Gallery
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Content"
                  className={`c-pointer ${activeBtn("f-content")}`}
                  onClick={handleFilterKeyChange("f-content")}
                >
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".f-content"
                  />
                  Content
                </label>
              </div>
            </div>
          </div>
          <div className="box-items portfolio-items">
            <div className="box-item f-gallery">
              <div className="image">
                <a
                  href="#gallery-1"
                  onClick={() => {
                    setGallery(!gallery);
                    setActiveGallaryImage(1);
                  }}
                  className="has-popup-gallery"
                >
                  <img src="images/works/work1.jpg" alt />
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
                <div className="category">Gallery</div>
                <a href="#gallery-1" className="name has-popup-gallery">
                  Canvas Tote Bag MockUp
                </a>
              </div>
            </div>
            <div className="box-item f-video">
              <div className="image">
                <a
                  href="https://youtu.be/S4L8T2kFFck"
                  className="has-popup-video"
                >
                  <img src="images/works/work2.jpg" alt />
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
                <div className="category">Video</div>
                <a
                  href="https://youtu.be/S4L8T2kFFck"
                  className="name has-popup-video"
                >
                  Coffee Cup In Hand
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
                  <img src="images/works/work8.jpg" alt />
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
                <div className="category">Links</div>
                <a href="https://beshley.com/" className="name has-popup-link">
                  Love &amp; Care Ceramic Bottles
                </a>
              </div>
            </div>
            <div className="box-item f-image">
              <div className="image">
                <a href="images/works/work4.jpg" className="has-popup-image">
                  <img src="images/works/work4.jpg" alt />
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
                <div className="category">Image</div>
                <a
                  href="images/works/work4.jpg"
                  className="name has-popup-image"
                >
                  Shopping gift bag
                </a>
              </div>
            </div>
            <div className="box-item f-gallery">
              <div className="image">
                <a
                  href="#gallery-2"
                  className="has-popup-gallery"
                  onClick={() => {
                    setGallery(!gallery);
                    setActiveGallaryImage(2);
                  }}
                >
                  <img src="images/works/work5.jpg" alt />
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
                <div className="category">Gallery</div>
                <a href="#gallery-2" className="name has-popup-gallery">
                  Amore Mio Three Cups
                </a>
              </div>
            </div>
            <div className="box-item f-music">
              <div className="image">
                <a
                  href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  className="has-popup-music"
                >
                  <img src="images/works/work6.jpg" alt />
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
                <div className="category">Music</div>
                <a
                  href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true"
                  className="name has-popup-music"
                >
                  Marta Veludo Beautiful Poster
                </a>
              </div>
            </div>
            <div className="box-item f-image">
              <div className="image">
                <a href="images/works/work7.jpg" className="has-popup-image">
                  <img src="images/works/work7.jpg" alt />
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
                <div className="category">Image</div>
                <a
                  href="images/works/work7.jpg"
                  className="name has-popup-image"
                >
                  Minimal Poster Frame
                </a>
              </div>
            </div>
            <div className="box-item f-content">
              <div className="image">
                <a
                  href="#popup-1"
                  className="has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                  }}
                >
                  <img src="images/works/work3.jpg" alt />
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
                <div className="category">Content</div>
                <a
                  href="#popup-1"
                  className="name has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                  }}
                >
                  Cardboard Box
                </a>
              </div>
            </div>
            <div className="box-item f-content">
              <div className="image">
                <a
                  href="#popup-2"
                  className="has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                  }}
                >
                  <img src="images/works/work3.jpg" alt />
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
                <div className="category">Content</div>
                <a
                  href="#popup-2"
                  className="name has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                  }}
                >
                  Cardboard Box
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
